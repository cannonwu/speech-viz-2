import { useState } from 'react';
import { pingBackend } from './api';
import './App.css';

function App() {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handlePing = async () => {
    setLoading(true);
    setError('');
    setResponse('');
    
    try {
      const data = await pingBackend();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to ping backend');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Speech Visualizer (MVP)</h1>
      <button 
        onClick={handlePing} 
        disabled={loading}
        className="ping-button"
      >
        {loading ? 'Pinging...' : 'Ping backend'}
      </button>
      
      {error && (
        <div className="error">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {response && (
        <div className="response">
          <strong>Response:</strong>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}

export default App;



