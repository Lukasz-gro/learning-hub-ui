import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './views/homepage';
import NavHeader from './navigation/NavHeader';
import About from './views/about/About';
import Courses from "./views/courses";
import CourseMainView from "./views/courses/CourseMainView";
import Problem from "./views/problem";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./views/login/LoginPage";
import RegisterPage from "./views/login/RegisterPage";

function App() {
  return (
    <div>
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
              <Route path='/login' element={<LoginPage />}/>
              <Route path='/register' element={<RegisterPage />}/>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
