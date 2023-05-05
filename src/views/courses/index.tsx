import { Alert, Spinner } from "react-bootstrap";
import CourseCard from "./CourseCard";
import { Link } from 'react-router-dom'
import "./Courses.css"
import useCoursesList from "./useCoursesList";

export default function Courses() {
  const { isLoading, isError, data } = useCoursesList();

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" />
      </div>);
  }

  if (isError) {
    return (
      <div className="main-container">
        <Alert variant='danger'>
          An error has occured while loading the page. Please refresh the page.
        </Alert>
      </div>
    )
  }

  return (
    <div className="main-container">
      <div className="set-of-cards">
        {data.map(course => (
          <Link key={course.id} to={`/course/${course.id}/main`} style={{ textDecoration: 'none' }}>
            <CourseCard course={course}/>
          </Link>))}
      </div>
    </div>
  )
}
