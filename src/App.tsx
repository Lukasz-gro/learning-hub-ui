import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { healthCheck } from './services/learning-hub';
import Homepage from './views/homepage';
import CodeEditor from './views/codeEditor';

function App() {
  const [serverResponse, setServerResponse] = useState<string>('No request made')
  const talkWithServer = () => {
    healthCheck().then(setServerResponse).catch(console.log);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
        <CodeEditor />
      </header>
    </div>
  );
}

export default App;
