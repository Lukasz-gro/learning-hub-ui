import { Problem } from "../courses/service.dto"

type Props = {
  problem: Problem,
}

export default function ProblemDescription({ problem }: Props) {
  return (
    <div className="problem-description">
      <div className="problem-name">
        <h4>{problem.name}</h4>
      </div>
      <div className="problem-content" dangerouslySetInnerHTML={{ __html: problem.description }} />
    </div>
  )
}