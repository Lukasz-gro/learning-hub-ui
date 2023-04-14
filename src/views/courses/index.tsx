import { useEffect, useState } from "react"
import { Course } from "./service.dto";
import { getCoursesList } from "./service";
import { Alert, Spinner } from "react-bootstrap";
import CourseView from "./CourseView";
import "./Courses.css"

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCoursesList()
      .then(response => {
        setCourses(response);
        setError(false);
      })
      .catch(() => {
        setError(true);
      })
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner animation="border" />
      </div>);
  }

  if (error) {
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
      {courses.map(course => <CourseView key={course.id} course={course}/>)}
    </div>
  )
}
