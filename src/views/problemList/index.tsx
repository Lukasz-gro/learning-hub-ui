import { useNavigate } from "react-router-dom";
import { Problem } from "../courses/service.dto";
import "./Problem.css"
import { Table } from "react-bootstrap";

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
    <tr>
      <td>{problem.id}</td>
      <td onClick={() => navigate(`/code/${courseId}/${problem.id}`)}>{problem.name}</td>
      <td>To do</td>
    </tr>
  );
}

export default function ProblemsList({ problems, courseId }: Props) {
  return (
    <div className="main-container">
     <table className="table-container">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
          {problems.map(problem => <ProblemRow key={problem.id} problem={problem} courseId={courseId}/>)}
      </table>
    </div>
  );
}
