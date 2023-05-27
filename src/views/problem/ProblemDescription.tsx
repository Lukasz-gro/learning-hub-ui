import QuestionForBotLabel from "../chatBot/QuestionForBotLabel";

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
        The task is to arrange a given set of numbers in ascending order and return the sorted array. For instance, if the input array is [5,2,3,1], the output should be [1,2,3,5]. Sorting the array entails changing the order of the numbers in the array such that the smallest numbers come first and the largest numbers come last. 
        After sorting, some numbers will remain in the same position while others will be moved to new positions.<br/><br/>
        <span style={{ fontWeight: "bold" }}>Example 1</span><br/><span style={{ fontWeight: "bold" }}>Input:</span> 5 2 3 1 <br/>
        <span style={{ fontWeight: "bold" }}>Output:</span> 1 2 3 5
        <br/>
        <br/>
        <span style={{ fontWeight: "bold" }}>Example 2</span><br/><span style={{ fontWeight: "bold" }}>Input:</span> 3 1 8 2 9 5 7 6 4<br/>
        <span style={{ fontWeight: "bold" }}>Output:</span> 1 2 3 4 5 6 7 8 9
      </div>
      <QuestionForBotLabel/>
    </div>
  )
}