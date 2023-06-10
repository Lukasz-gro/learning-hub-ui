import { Editor } from "@monaco-editor/react";
import { Language, Theme, mapOfLanguages } from './useCodeEditor';

type Props = {
    code: string | undefined;
    setCode: (newCode: string | undefined) => void;
    language: Language;
    setLanguage: (newLanguage: Language) => void;
    theme: Theme;
    setTheme: (newTheme: Theme) => void;
    status: string;
    setStatus: (newStatus: string) => void;
    listenStatusChange: (submitId: string) => void;
}

export default function HistorySolution({
    code,
    setCode,
    language,
    setLanguage,
    theme,
    setTheme,
    status,
    setStatus,
    listenStatusChange
  }: Props) {
setCode("#include <iostream> \n using namespace std; \n int main() {\n int k; \n cin>>k; \n for(int i=0;i<k;i++) { \n    int x; \n    cin>>x; \n } \n }");
    return(
        <div className="container-solution-history">
            <div className="label-solution-history">
                <h4>Past Solution</h4>
            </div>
            <div className="content-solution-history">
                <div className="propertie">Date: 2023.06.06 20:53</div>
                <div className="propertie">Status: Ok</div>
                <div className="editor-container-history">
                    <Editor
                        height="40vh"
                        width="35vw"
                        language={language} 
                        value={code}
                        theme={theme}
                        onChange={setCode}
                    />
                </div>
            </div>
        </div>
    )
}