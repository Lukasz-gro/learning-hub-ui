import { useParams } from "react-router-dom";
import useCourseProblems from "./useCourseProblems";
import { Spinner, Alert } from "react-bootstrap";
import ProblemsList from "../problemList";

export default function CourseMainView() {
  const { courseId } = useParams();
  const { isLoading, isError, data } = useCourseProblems(courseId);

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
    <> <div className="course-container"> 
        <div className="course-description">
        <h2>Algorithm</h2> 
        In this course, you will look at the core data structures and algorithms that are the building blocks of applications everywhere. You will learn how they work and see real-world examples that you can apply to your next project.
        </div> 
        <ProblemsList problems={data || []} courseId={courseId || "0"}/>
    </div>
    </>
   )
}