import React, { useState, useRef, useEffect } from 'react';

// Simple Gemini chat bot page with chat history
const GeminiTest = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]); // {role: 'user'|'gemini', text: string}
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setChat(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      console.log('Sending request to Gemini proxy server...');
      // Make sure we're using the correct endpoint
      const response = await fetch('http://localhost:4000/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: input }),
      });
      
      console.log('Received response:', response.status);
      if (!response.ok) {
        const errorText = await response.text().catch(() => 'No error text');
        console.error('Server error details:', errorText);
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Parsed response data:', data);
      
      // Check for specific response structure
      if (data.error) {
        throw new Error(`API error: ${data.error}`);
      }
      
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(data);
      setChat(prev => [...prev, { role: 'gemini', text: answer }]);
    } catch (err) {
      console.error('Chat error:', err);
      setChat(prev => [
        ...prev,
        {
          role: 'gemini',
          text:
            'Error: ' + err.message +
            '\n\nTroubleshooting steps:' +
            '\n1. Make sure your server is running: node geminiProxy.js' +
            '\n2. Check if CORS is enabled in your server' +
            '\n3. Verify the URL is correct: http://localhost:4000/gemini-chat' +
            '\n4. Check your browser console and server logs for specific errors' +
            '\n5. Your Gemini API key may be invalid or have usage limits'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded shadow p-6 w-full max-w-xl flex flex-col" style={{height: 600}}>
        <h2 className="text-2xl font-bold mb-4">Gemini Chat Box</h2>
        <div className="flex-1 overflow-y-auto mb-4 border rounded p-3 bg-gray-50">
          {chat.length === 0 && (
            <div className="text-gray-400">Start the conversation with Gemini...</div>
          )}
          {chat.map((msg, idx) => (
            <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-3 py-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-purple-100 text-purple-900'}`}>
                <b>{msg.role === 'user' ? 'You' : 'Gemini'}:</b> {msg.text}
              </span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="flex">
          <textarea
            className="flex-1 border rounded p-2 mr-2"
            rows={2}
            placeholder="Type your message and press Enter..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading || !input.trim()}
          >
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiTest;
