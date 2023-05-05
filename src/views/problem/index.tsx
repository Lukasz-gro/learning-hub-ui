import { useParams } from "react-router-dom";
import CodeEditorView from "../codeEditor/CodeEditorView";
import ProblemDescription from "./ProblemDescription";
import useProblem from "./useProblem";
import { Spinner, Alert } from "react-bootstrap";

export default function Problem() {
  const { problemId } = useParams();
  const { isLoading, isError, data } = useProblem(problemId || "-1");

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
    <>
      <ProblemDescription description={data.description}/>
      <CodeEditorView />
    </>
  )
}