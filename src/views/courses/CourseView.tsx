import { Accordion, Button } from "react-bootstrap"
import { Course } from "./service.dto"
import "./Courses.css"
import { Link } from 'react-router-dom'

type Props = {
  course: Course
}

export default function CourseView({ course: { id, name, description }}: Props) {
  return (
    <Accordion className="accordeon-base">
      <Accordion.Header>{name}</Accordion.Header>
      <Accordion.Body>
        <div>{description}</div>
        {/* <Button onClick={() => {}}>Check course</Button> */}
        <Link to={`/course/${id}/problems`}>Click me to check problem list</Link>
      </Accordion.Body>
    </Accordion>
  )
}