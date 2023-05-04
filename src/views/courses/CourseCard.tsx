import { Accordion, Button } from "react-bootstrap"
import { Course } from "./service.dto"
import "./CourseCard.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons"


type Props = {
  course: Course
}
function changeBackground(e) {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}
export default function CourseCard({ course: { id, name, description }}: Props) {
  return (
    // <Accordion className="accordeon-base">
    //   <Accordion.Header>{name}</Accordion.Header>
    //   <Accordion.Body>
    //     <div>{description}</div>
    //     {/* <Button onClick={() => {}}>Check course</Button> */}
    //     <Link to={`/course/${id}/problems`}>Click me to check problem list</Link>
    //   </Accordion.Body>
    // </Accordion>
    <div className="courseCardFrame" onMouseMove={changeBackground}>
      <div className="card-content">
      <div className="card-image">
        <FontAwesomeIcon size="2xl" icon={faCircleNodes} />
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <div className="card-info-title">
            <h3>Algorithm</h3>  
            <h4>Algorithms basics course</h4>
          </div>    
        </div>
      </div>
    </div>
    </div>
  )
}