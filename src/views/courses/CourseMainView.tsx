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
    <ProblemsList problems={data || []} courseId={courseId || "0"}/>
   )
}