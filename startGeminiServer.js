import { exec, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if required packages are installed
const packageJsonPath = path.join(__dirname, 'package.json');
let packageJson;

try {
  if (fs.existsSync(packageJsonPath)) {
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  } else {
    console.log('No package.json found. Creating one...');
    packageJson = {
      name: "gemini-proxy",
      version: "1.0.0",
      description: "Proxy server for Google Gemini API",
      main: "geminiProxy.js",
      type: "module",
      scripts: {
        "start": "node geminiProxy.js"
      },
      dependencies: {}
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
} catch (err) {
  console.error('Error reading or creating package.json:', err);
  process.exit(1);
}

// Check for required dependencies
const requiredDeps = ['express', 'node-fetch', 'cors'];
const missingDeps = [];

for (const dep of requiredDeps) {
  if (!packageJson.dependencies || !packageJson.dependencies[dep]) {
    missingDeps.push(dep);
  }
}

// Install missing dependencies if needed
if (missingDeps.length > 0) {
  console.log(`Installing missing dependencies: ${missingDeps.join(', ')}...`);
  
  exec(`npm install ${missingDeps.join(' ')}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing dependencies: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(stdout);
    startServer();
  });
} else {
  startServer();
}

function startServer() {
  console.log('Starting Gemini proxy server...');
  
  // Check if server file exists
  const serverPath = path.join(__dirname, 'geminiProxy.js');
  if (!fs.existsSync(serverPath)) {
    console.error(`geminiProxy.js not found at ${serverPath}`);
    process.exit(1);
  }
  
  // Start the server
  const server = spawn('node', ['geminiProxy.js'], {
    stdio: 'inherit',
    shell: true
  });
  
  server.on('error', (err) => {
    console.error(`Failed to start server: ${err.message}`);
  });
  
  console.log('Server process started. Press Ctrl+C to stop.');
}
