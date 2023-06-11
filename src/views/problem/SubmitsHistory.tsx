import { useEffect, useState } from "react";
import { Submit } from "../../services/learning-hub";
import { getSubmitHistory } from "./service";

type Props = {
  userId: string;
  problemId: string;
  setSelectedSubmit: (newSubmit: Submit) => void;
}

type RowProps = {
  submit: Submit;
  setSelectedSubmit: (newSubmit: Submit) => void;
}

function ProblemRow({ submit, setSelectedSubmit }: RowProps) {
  return (
    <tr onClick={() => setSelectedSubmit(submit)}>
      <td>{submit.date}</td>
      <td>{submit.status}</td>
    </tr>
  );
}

export default function SubmitsHistory({ userId, problemId, setSelectedSubmit }: Props) {
  const [submitHistory, setSubmitHistory] = useState<Submit[]>([]);
  
  useEffect(() => {
    getSubmitHistory(userId, problemId)
      .then(response => {
        setSubmitHistory(response);
        if(response.length > 0) {
          setSelectedSubmit(response[0]);
        }
      })
      .catch(console.log);
  }, []);
  
  return (
    <div className="problem-description">
      <div className="name-options">
        <h4>Submits history</h4>
      </div>
      <div className="history-content">
      <table className="table-container">
        <tr>
          <th>Date</th>
          <th>Status</th>
        </tr>
        { submitHistory.map((submit, index) => <ProblemRow submit={submit} key={index} setSelectedSubmit={setSelectedSubmit}/>)}
    </table>
      </div>
    </div>
  )
}