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
import CompilerResults from './CompilerResults';
import TestsArea from './TestsArea';

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
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const submitStatusContext = useContext(SubmitStatusContext);
 

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (submitId !== "") {
        checkSubmitStatus(submitId)
          .then(response => {
            setStatus(response.status);
            if (response.status !== 'QUE') {
              setSubmitId("");
            }
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

  const options = [<CompilerResults status={status} key={0}/>, <TestsArea status={"lipka"} key={"1"} />];
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
    <div className="user-info">
      <div className = "buttons-nav">
        <button onClick={() => setSelectedOption(0)} className="user-view-button">Results</button>
        <button onClick={() => setSelectedOption(1)} className="user-view-button">Tests</button>
      </div>
      {options[selectedOption]}
    </div>
  <div className="editor-actions">
    <Button onClick={onSubmit} variant="outline-success">Submit</Button>
  </div>
</div>;
}