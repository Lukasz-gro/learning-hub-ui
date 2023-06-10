import { useNavigate, useParams } from "react-router-dom";
import CodeEditorView from "../codeEditor/CodeEditorView";
import ProblemDescription from "./ProblemDescription";
import useProblem from "./useProblem";
import { Spinner, Alert } from "react-bootstrap";
import "./Problem.css"
import "./SubmitsHistory.css"
import "./HistorySolution.css"
import { useContext, useState } from "react";
import PageNavigation from "../../navigation/PageNavigation";
import { faArrowLeft, faBell, faClockRotateLeft, faComments, faFileLines } from "@fortawesome/free-solid-svg-icons"
import ChatWindow from "../chatBot/ChatWindow";
import SubmitsHistory from "./SubmitsHistory";
import useCodeEditor from "../codeEditor/useCodeEditor";
import useProblemStatus from "./useProblemStatus";
import { UserContext } from "../../contexts/UserContext";
import HistorySolution from "./HistorySolution";

const navigationIcons = [faFileLines, faBell, faComments, faClockRotateLeft, faArrowLeft];

export default function Problem() {
  const { problemId } = useParams();
  const { isLoading, isError, data } = useProblem(problemId || "-1");
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<number>(0);
  const codeEditor = useCodeEditor();
  const problemStatus = useProblemStatus();
  const userContext = useContext(UserContext);

  const navigate = useNavigate();
  
  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" />
      </div>);
  }

  if (isError) {
    return (
      <div className="main-container">
        <Alert variant='danger'>
          An error has occured while loading the page. Please refresh the page.
        </Alert>
      </div>
    )
  }
  
  const description = `The task is to arrange a given set of numbers 
  in ascending order and return the sorted array. For instance, if the input array is [5,2,3,1], the output should be [1,2,3,5]. Sorting the array entails changing the order of the numbers in the array such that the smallest numbers come first and the largest numbers come last. 
  After sorting, some numbers will remain in the same position while others will be moved to new positions.<br/><br/>
  First number is a number of numbers to sort. <br/><br/>
  <span style={{ fontWeight: "bold" }}>Example 1</span><br/><span style={{ fontWeight: "bold" }}>Input:</span> 4 5 2 3 1 <br/>
  <span style={{ fontWeight: "bold" }}>Output:</span> 1 2 3 5
  `

  const createMessage = (option: string) => {
    return `This is problem statement: ${description}. This is my code: ${codeEditor.code}. ${option}`;
  };

  const navigationOption = [<ProblemDescription description={data.description} />, 
    <ProblemDescription description={data.description} />,
    <ChatWindow userId={userContext.login} problemId={problemId || "-1"} createMessage={createMessage}/>,
    <SubmitsHistory />];

  const codeEditorType = [<CodeEditorView { ...codeEditor } { ...problemStatus }/>, <HistorySolution { ...codeEditor } { ...problemStatus }/>];

  const onPositionClick = (position: number) => {
    if (position === navigationIcons.length - 1) {
      navigate(-1)
      setSelectedOption(1);
      return;
    } else if (position === 3) {
      setSelectedType(1);
    } else {
      setSelectedType(0);
    }
    setSelectedOption(position);
  };

  return (
    <div className="problem-container">
      <PageNavigation 
        selected={selectedOption} 
        icons={navigationIcons}
        onPositionClick={onPositionClick}/>
      {navigationOption[selectedOption]}
      {codeEditorType[selectedType]}
    </div>
  )
}