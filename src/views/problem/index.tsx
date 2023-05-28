import { useNavigate, useParams } from "react-router-dom";
import CodeEditorView from "../codeEditor/CodeEditorView";
import ProblemDescription from "./ProblemDescription";
import useProblem from "./useProblem";
import { Spinner, Alert } from "react-bootstrap";
import "./Problem.css"
import { useState } from "react";
import PageNavigation from "../../navigation/PageNavigation";
import { faArrowLeft, faBell, faClockRotateLeft, faComments, faFileLines } from "@fortawesome/free-solid-svg-icons"
import ChatWindow from "../chatBot/ChatWindow";

const navigationIcons = [faFileLines, faBell, faComments, faClockRotateLeft, faArrowLeft];

export default function Problem() {
  const { problemId } = useParams();
  const { isLoading, isError, data } = useProblem(problemId || "-1");
  const [selectedOption, setSelectedOption] = useState<number>(0);
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

  const navigationOption = [<ProblemDescription description={data.description}/>, 
    <ProblemDescription description={data.description}/>,
    <ChatWindow />,
    <ChatWindow />];

  const onPositionClick = (position: number) => {
    setSelectedOption(position);

    if (position === navigationIcons.length - 1) {
      navigate(-1);
    }
  };

  return (
    <div className="problem-container">
      <PageNavigation 
        selected={selectedOption} 
        icons={navigationIcons}
        onPositionClick={onPositionClick}/>
      {navigationOption[selectedOption]}
      <CodeEditorView />
    </div>
  )
}