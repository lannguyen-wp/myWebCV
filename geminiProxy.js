import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

console.log('\n\n*** STARTING GEMINI PROXY SERVER ***\n\n');

const app = express();
const port = 4000;

// Enable more detailed debugging
const DEBUG = true;

// Create a more robust CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Log all incoming requests for debugging
app.use((req, res, next) => {
  if (DEBUG) console.log(`${new Date().toISOString()} [${req.method}] ${req.path} - ${req.ip}`);
  next();
});

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Load API key from environment variable

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set in the environment variables.');
  process.exit(1);
}

// Add a test endpoint to verify the server is running
app.get('/', (req, res) => {
  res.send('Gemini proxy server is running');
});

// Add endpoint to list available models
app.get('/list-models', async (req, res) => {
  try {
    console.log('Fetching available Gemini models...');
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error fetching models:', errorText);
      return res.status(response.status).json({ error: errorText });
    }
    
    const data = await response.json();
    // Log all available models to console
    console.log('Available Gemini models:');
    if (data.models && data.models.length > 0) {
      data.models.forEach(model => {
        console.log(`- ${model.name} (${model.displayName})`);
      });
    } else {
      console.log('No models available or returned from API');
    }
    res.json(data);
  } catch (err) {
    console.error('Error in list-models endpoint:', err);
    res.status(500).json({ error: err.message });
  }
});

// Add endpoint to list available models with HTML output
app.get('/models', async (req, res) => {
  try {
    console.log('Fetching available Gemini models...');
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error fetching models:', errorText);
      return res.send(`<html><body><h1>Error fetching models</h1><pre>${errorText}</pre></body></html>`);
    }
    
    const data = await response.json();
    // Generate HTML to display models
    let html = `<html><body><h1>Available Gemini Models</h1><ul>`;
    
    if (data.models && data.models.length > 0) {
      data.models.forEach(model => {
        console.log(`- ${model.name} (${model.displayName})`);
        html += `<li><strong>${model.name}</strong> (${model.displayName})</li>`;
      });
    } else {
      html += `<li>No models available or returned from API</li>`;
      console.log('No models available or returned from API');
    }
    
    html += `</ul></body></html>`;
    res.send(html);
  } catch (err) {
    console.error('Error in list-models endpoint:', err);
    res.send(`<html><body><h1>Server Error</h1><p>${err.message}</p></body></html>`);
  }
});

app.post('/gemini-chat', async (req, res) => {
  const { content } = req.body;
  if (DEBUG) console.log(`Received request with content of length: ${content?.length || 0}`);
  
  try {
    // Validate input
    if (!content) {
      if (DEBUG) console.log('Missing content in request');
      return res.status(400).json({ error: 'Missing content' });
    }

    // Log the exact model name being used to make sure it's correct
    const modelName = 'gemini-1.5-flash';
    if (DEBUG) console.log(`Using model: ${modelName}`);
    if (DEBUG) console.log(`Sending request to Gemini API...`);
    
    // Make sure we're using gemini-1.5-flash, not gemini-pro
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: content }] }]
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG) console.log(`Gemini API error (${response.status}): ${errorText}`);
      return res.status(response.status).json({ 
        error: `Gemini API error (${response.status}): ${errorText}` 
      });
    }

    const data = await response.json();
    if (DEBUG) console.log(`Received successful response from Gemini API`);
    
    res.json(data);
  } catch (err) {
    if (DEBUG) console.log(`Server error: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

// Wrap server startup in try/catch to catch any initialization errors
try {
  // Start the server
  app.listen(port, '0.0.0.0', () => {
    console.log('\n********************************************************');
    console.log(`**** GEMINI PROXY SERVER RUNNING AT PORT ${port} ****`);
    console.log(`**** Open http://localhost:${port} in your browser ****`);
    console.log('********************************************************\n');
  });
} catch (error) {
  console.error('\n*** SERVER FAILED TO START! ***');
  console.error('Error:', error);
}