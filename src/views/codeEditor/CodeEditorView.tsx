import './CodeEditorStyles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Editor from '@monaco-editor/react';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeIcon } from './ThemeIcon';
import { checkSubmitStatus, queueCode } from '../../services/learning-hub';
import { SubmitStatusContext } from '../../contexts/SubmitStatusContext';
import useNotifications from '../../notifications/useNotifications';
import { useEffect } from 'react';

enum Language {
  CPP = "cpp",
  PYTHON = "python", 
  JAVA = "java"
}

export enum Theme {
  LIGHT = "light",
  DARK = "vs-dark"
}

const mapOfLanguages = new Map<Language, string>()
    .set(Language.CPP, "cpp")
    .set(Language.JAVA, "java")
    .set(Language.PYTHON, "python");

export default function CodeEditorView() {
  const [language, setLanguage] = useState<Language>(Language.CPP);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [code, setCode] = useState<string | undefined>("");
  const { notifyInformation } = useNotifications();
  const [submitId, setSubmitId] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const submitStatusContext = useContext(SubmitStatusContext);

  useEffect(() => {
    console.log("Submitid", submitId);
    const intervalTime = setInterval(() => {
      if (submitId !== "") {
        checkSubmitStatus(submitId)
      .then(response => {
        setStatus(response.status);
        setSubmitId("");
      })
      .catch(() => console.log("Error while checking status"));
      }
    }, 5000);

    return () => {
      clearInterval(intervalTime);
    }
  }, [submitId]);

  const onSubmit = () => {
    queueCode(code, mapOfLanguages.get(language)!, 1, 1)
      .then(response => {
        notifyInformation(`Scheduled submit: ${response.id}`);
        submitStatusContext.addStatusListener?.(response.id);
        setSubmitId(response.id.toString());
        setStatus(response.status);
      })
      .catch(() => console.log("Error happened"))
  }

  return <div className="editor-container">
        <div className="editor-options">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {language}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.values(Language).map(value => <Dropdown.Item key={value} onClick={() => setLanguage(value)}>{value}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <ThemeIcon setTheme={setTheme} currentTheme={theme} />
    </div>
    <div className="editor-field">
      <Editor 
        height="50vh"
        width="40vw"
        language={language} 
        value={code}
        theme={theme}
        onChange={setCode}/>
    </div>
    <div className="compile-info">
      { status || "Result" }
    </div>
  <div className="editor-actions">
    <Button onClick={onSubmit} variant="outline-success">Submit</Button>
  </div>
</div>;
}