type Props = {
  description: string;
}

export default function ProblemDescription({ description }: Props) {
  return (
    <div className="problem-description">
      <div className="problem-name">
        <h4>23. Sort an Array</h4>
      </div>
      <div className="problem-content">
        {/* {description} */}
        Given an array of integers nums, sort the array in ascending order and return it.<br/>
        Input: nums = [5,2,3,1]<br/>
        Output: [1,2,3,5]<br/>
        Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5)
      </div>
    </div>
  )
}