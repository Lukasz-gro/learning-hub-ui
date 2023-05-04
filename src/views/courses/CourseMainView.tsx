import { useParams } from "react-router-dom";

export default function CourseMainView() {
  const { courseId } = useParams();

  return (
    <div>
      This is main course view for id { courseId }
    </div>
  )
}