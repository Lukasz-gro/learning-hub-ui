import Nav from 'react-bootstrap/Nav';
import "./NavStyle.css"
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export default function NavHeader() {
   function check(){
    var currnet_location = window.location.href;
    if(currnet_location.includes("/course")){
        var elem = document.getElementById("course-nav");
        if(elem != null){
            console.log("TEST");
            elem.style.color = "red";
        }
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
      <Link to="/about">About</Link>
      <div className="dot"></div>
      <div className="profiles-nav-info">
        <Link to="#">Log in</Link>
        <Link to="#">Sign up</Link>
      </div>
    </nav>
  )
}