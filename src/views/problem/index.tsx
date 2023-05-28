import { useParams } from "react-router-dom";
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

  return (
    <div className="problem-container">
      <PageNavigation 
        selected={selectedOption} 
        icons={navigationIcons}
        onPositionClick={setSelectedOption}/>
      {/* <ProblemDescription description={data.description}/> */}
      <ChatWindow/>
      <CodeEditorView />
    </div>
  )
}