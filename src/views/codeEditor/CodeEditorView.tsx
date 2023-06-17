import './CodeEditorStyles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Editor from '@monaco-editor/react';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeIcon } from './ThemeIcon';
import { checkSubmitStatus, queueCode } from '../../services/learning-hub';
import { SubmitStatusContext } from '../../contexts/SubmitStatusContext';
import useNotifications from '../../notifications/useNotifications';
import CompilerResults from './CompilerResults';
import TestsArea from './TestsArea';
import { Language, Theme, mapOfLanguages } from './useCodeEditor';

type Props = {
  userLogin: string;
  code: string | undefined;
  setCode: (newCode: string | undefined) => void;
  language: Language;
  setLanguage: (newLanguage: Language) => void;
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
  status: string;
  setStatus: (newStatus: string) => void;
  listenStatusChange: (submitId: string) => void;
  problemId: string;
}

export default function CodeEditorView({
  userLogin,
  code,
  setCode,
  language,
  setLanguage,
  theme,
  setTheme,
  status,
  setStatus,
  listenStatusChange,
  problemId
}: Props) {
  const { notifyInformation } = useNotifications();
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [lastClicked, setLastClicked] = useState<Date>(() => new Date());
  const submitStatusContext = useContext(SubmitStatusContext);

  const onSubmit = () => {
    if((new Date().getTime() - lastClicked.getTime()) / 1000 < 3) {
      return;
    }
    setLastClicked(new Date());
    queueCode(userLogin, code, mapOfLanguages.get(language)!, problemId, 1)
      .then(response => {
        notifyInformation(`Scheduled submit: ${response.id}`);
        submitStatusContext.addStatusListener?.(response.id);
        listenStatusChange(response.id.toString());
        setStatus(response.status);
      })
      .catch(() => console.log("Error happened"))
  }

  const options = [<CompilerResults status={status} key={status}/>, <TestsArea status={"lipka"} key={"1"} />];

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
        {/* <button onClick={() => setSelectedOption(1)} className="user-view-button">Tests</button> */}
      </div>
      {options[selectedOption]}
    </div>
  <div className="editor-actions">
    <Button onClick={onSubmit} variant="outline-success">Submit</Button>
  </div>
</div>;
}