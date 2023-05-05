type Props = {
  description: string;
}

export default function ProblemDescription({ description }: Props) {
  return (
    <div>
      {description}
    </div>
  )
}