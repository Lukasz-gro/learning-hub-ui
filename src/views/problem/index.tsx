import { useParams } from "react-router-dom";
import CodeEditorView from "../codeEditor/CodeEditorView";
import ProblemDescription from "./ProblemDescription";
import useProblem from "./useProblem";
import ProblemNavigation from "./ProblemNavigation";
import { Spinner, Alert } from "react-bootstrap";
import "./Problem.css"
import { useState } from "react";

export default function Problem() {
  const { problemId } = useParams();
  const { isLoading, isError, data } = useProblem(problemId || "-1");
  const [currentOption, setCurrentOption] = useState<number>(0);

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
      <ProblemNavigation />
      <ProblemDescription description={data.description}/>
      <CodeEditorView />
    </div>
  )
}