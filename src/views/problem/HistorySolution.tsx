import { Editor } from "@monaco-editor/react";
import { Language, Theme } from "../codeEditor/useCodeEditor";
import { Submit } from "../../services/learning-hub";

type Props = {
    language: Language;
    theme: Theme;
    submit: Submit
}

export default function HistorySolution({
    language,
    theme,
    submit
  }: Props) {

    return(
        <div className="container-solution-history">
            <div className="label-solution-history">
                <h4>Past Solution</h4>
            </div>
            <div className="content-solution-history">
                <div className="propertie">Date: {submit.date}</div>
                <div className="propertie">Status: {submit.status}</div>
                <div className="editor-container-history">
                    <Editor
                        height="40vh"
                        width="35vw"
                        language={language} 
                        value={submit.code}
                        theme={theme}
                        onChange={() => {}}/>
                </div>
            </div>
        </div>
    )
}