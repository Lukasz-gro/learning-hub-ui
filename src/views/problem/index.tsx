import CodeEditorView from "../codeEditor/CodeEditorView";
import ProblemDescription from "./ProblemDescription";


export default function Problem() {
  return (
    <>
      <ProblemDescription/>
      <CodeEditorView />
    </>
  )
}