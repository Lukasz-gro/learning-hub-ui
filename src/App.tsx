import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { healthCheck } from './services/learning-hub';
import Homepage from './views/homepage';
import CodeEditor from './views/codeEditor';
import NavHeader from './navigation/NavHeader';
import About from './views/about/About';


function App() {
  const [serverResponse, setServerResponse] = useState<string>('No request made')

  const talkWithServer = () => {
    healthCheck().then(setServerResponse).catch(console.log);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <header className="App-header">
          <Routes>
            <Route index element={<Homepage/>}/>
            <Route path='code-editor' element={<CodeEditor/>}/>
            <Route path='about' element={<About/>}/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
