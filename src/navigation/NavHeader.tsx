import Nav from 'react-bootstrap/Nav';
import "./NavStyle.css"
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function NavHeader() {
  const userContext = useContext(UserContext);

  function notNull(course_link:any, about_link:any, home_link:any){
    if(course_link != null && about_link != null && home_link != null){
      return true;
    }
    return false;
  }
   function check(){
    var currnet_location = window.location.href;
    var course_link = document.getElementById("course-nav");
    var about_link = document.getElementById("about-nav");
    var home_link = document.getElementById("home-nav");
    //#f6f4e6
    if(currnet_location.includes("/course") && course_link != null && about_link != null && home_link != null){
      course_link.style.color = "#848787";
      about_link.style.color = "#f6f4e6"; 
      home_link.style.color = "#f6f4e6";
    } else if(currnet_location.includes("/about") && course_link != null && about_link != null && home_link != null){
      about_link.style.color = "#848787";
      course_link.style.color = "#f6f4e6";
      home_link.style.color = "#f6f4e6";
    } else if(currnet_location.includes("/") && course_link != null && about_link != null && home_link != null){
      home_link.style.color = "#848787";
      course_link.style.color = "#f6f4e6";
      about_link.style.color = "#f6f4e6"; 
    } else if(course_link != null && about_link != null && home_link != null){
      home_link.style.color = "#f6f4e6";
      course_link.style.color = "#f6f4e6";
      about_link.style.color = "#f6f4e6"; 
    }
  }

  const location = useLocation();
    useEffect(() => {
      check();
  }, [location]);

  return (
    <nav className="navMenu">
      <Link id="home-nav" to="/">Home</Link>
      <Link id="course-nav" to="/course">Courses</Link>
      <Link id="about-nav" to="/about">About</Link>
      <div className="dot"></div>
      <div className="profiles-nav-info">
        {userContext.isLogged? <><Link to="#" onClick={() => { console.log("Logout"); userContext.logoutUser()}}>Logout</Link></>: <>
            <Link to="/login">Log in</Link>
            <Link to="/register">Sign up</Link>
          </>
        }
      </div>
    </nav>
  )
}