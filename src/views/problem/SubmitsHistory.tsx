  
  type RowProps = {
    date: string;
    status: string;
  }

  function ProblemRow({ date, status }: RowProps) {
    
    return (
      <tr>
        <td>{date}</td>
        <td>{status}</td>
      </tr>
    );
  }
  
  export default function SubmitsHistory() {
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
          <ProblemRow date="2023.06.06 20:53" status="OK"></ProblemRow>
          <ProblemRow date="2023.06.06 20:44" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.06 18:20" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.03 22:34" status="MEM"></ProblemRow>
          <ProblemRow date="2023.06.03 18:43" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.03 14:55" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.06 20:53" status="OK"></ProblemRow>
          <ProblemRow date="2023.06.06 20:44" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.06 18:20" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.03 22:34" status="MEM"></ProblemRow>
          <ProblemRow date="2023.06.03 18:43" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.03 14:55" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.06 20:53" status="OK"></ProblemRow>
          <ProblemRow date="2023.06.06 20:44" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.06 18:20" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.03 22:34" status="MEM"></ProblemRow>
          <ProblemRow date="2023.06.03 18:43" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.03 14:55" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.06 20:53" status="OK"></ProblemRow>
          <ProblemRow date="2023.06.06 20:44" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.06 18:20" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.03 22:34" status="MEM"></ProblemRow>
          <ProblemRow date="2023.06.03 18:43" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.03 14:55" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.06 20:53" status="OK"></ProblemRow>
          <ProblemRow date="2023.06.06 20:44" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.06 18:20" status="ANS"></ProblemRow>
          <ProblemRow date="2023.06.03 22:34" status="MEM"></ProblemRow>
          <ProblemRow date="2023.06.03 18:43" status="TLE"></ProblemRow>
          <ProblemRow date="2023.06.03 14:55" status="TLE"></ProblemRow>
      </table>
        </div>
      </div>
    )
  }