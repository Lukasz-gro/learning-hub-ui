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
import useSubmitHistory from "./useSubmitHistory";

const navigationIcons = [faFileLines, faBell, faComments, faClockRotateLeft, faArrowLeft];

export default function Problem() {
  const { problemId } = useParams();
  const { isLoading, isError, data: problem } = useProblem(problemId || "-1");
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<number>(0);
  const codeEditor = useCodeEditor();
  const problemStatus = useProblemStatus();
  const submitHistory = useSubmitHistory();
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
  
  const description = problem.description;

  const navigationOption = [<ProblemDescription description={problem.description} />, 
    <ProblemDescription description={problem.description} />,
    <ChatWindow 
      userId={userContext.login} 
      problemId={problemId || "-1"} 
      code={codeEditor.code} 
      problem={problem}/>,
    <SubmitsHistory userId={userContext.login} problemId={problemId || "-1"} setSelectedSubmit={submitHistory.setSelectedSubmit} />];

  const codeEditorType = [<CodeEditorView userLogin={userContext.login} { ...codeEditor } { ...problemStatus } problemId={problemId || "-1"}/>, <HistorySolution { ...codeEditor } { ...problemStatus } submit={submitHistory.selectedSubmit}/>];

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