type Props = {
  description: string;
}

export default function ProblemDescription({ description }: Props) {
  return (
    <div className="problem-description">
      <div className="problem-name">
        <h4>23. Sort an Array</h4>
      </div>
      <div className="problem-content" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}