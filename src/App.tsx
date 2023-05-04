import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './views/homepage';
import NavHeader from './navigation/NavHeader';
import About from './views/about/About';
import Courses from "./views/courses";
import CourseMainView from "./views/courses/CourseMainView";
import Problem from "./views/problem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path='course' element={<Courses/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='course/:courseId/main' element={<CourseMainView />}/>
            <Route path='code/:courseId/:problemId' element={<Problem />}/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
