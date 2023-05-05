import { useNavigate } from "react-router-dom";
import { Problem } from "../courses/service.dto";
import "./Problem.css"

type Props = {
  problems: Problem[];
  courseId: string;
}

type RowProps = {
  problem: Problem;
  courseId: string;
}

function ProblemRow({ problem, courseId }: RowProps) {
  const navigate = useNavigate();
  
  return (
    <tr onClick={() => navigate(`/code/${courseId}/${problem.id}`)}>
      <td>{problem.id}</td>
      <td>{problem.name}</td>
      <td>To do</td>
    </tr>
  );
}

export default function ProblemsList({ problems, courseId }: Props) {
  return (
    <div className="main-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => <ProblemRow key={problem.id} problem={problem} courseId={courseId}/>)}
        </tbody>
      </table>
    </div>
  );
}
