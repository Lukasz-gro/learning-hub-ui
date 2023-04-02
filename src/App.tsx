import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Homepage from './views/homepage';
import CodeEditor from './views/codeEditor';
import NavHeader from './navigation/NavHeader';
import About from './views/about/About';


function App() {
  const router = createBrowserRouter([{ path: "/", element: <Homepage />}])
  return (
    <RouterProvider router={router} /> );
      {/* <div className="App">
        <NavHeader />
        <header className="App-header"> */}
          {/* <Routes>
            <Route index element={<Homepage/>}/>
            <Route path='code-editor' element={<CodeEditor/>}/>
            <Route path='about' element={<About/>}/>
          </Routes> */}
        {/* </header>
      </div> */}
    // </RouterProvider>
  // );
}

export default App;
