import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { healthCheck } from './services/learning-hub';

function App() {
  const [serverResponse, setServerResponse] = useState<string>('No request made')
  const talkWithServer = () => {
    healthCheck().then(setServerResponse).catch(setServerResponse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{serverResponse}</p>
        <button onClick={talkWithServer}>Click me to talk to server</button>
      </header>
    </div>
  );
}

export default App;
