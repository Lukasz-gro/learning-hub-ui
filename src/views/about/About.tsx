
import './About.css';
import Dropdown from 'react-bootstrap/Dropdown';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons'; 
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeIcon } from './ThemeIcon';
const code = `
console.log("hello world");
`;
enum Language {
  CPP = "C++",
  PYTHON = "Python", 
  JAVA = "Java"
}

enum CodeSize {
  SMALL = "small",
  MEDIUM = "medium", 
  LARGE = "large"
}

export enum Theme{
  LIGHT = "light",
  DARK = "dark"
}

const mapOfLanguages = new Map<Language, string>()
    .set(Language.CPP, "cpp")
    .set(Language.JAVA, "java")
    .set(Language.PYTHON, "python");

export default function About() {
  const [language, setLanguage] = useState<Language>(Language.CPP);
  const [codeSize, setCodeSize] = useState<CodeSize>(CodeSize.SMALL);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {codeSize}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Object.values(CodeSize).map(value => <Dropdown.Item key={value} onClick={() => setCodeSize(value)}>{value}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
      <ThemeIcon setTheme={setTheme} currentTheme={theme} />
    </div>
    <div className="editor-field"><CodeEditor
  value={code}
  language={mapOfLanguages.get(language)}
  placeholder={`Please enter ${language} code.`}
  onChange={(evn) => {}}
  padding={15}
  data-color-mode={theme}
  style={{
    fontSize: codeSize,
    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
  }}
/></div>
  <div className="editor-actions">
    <Button variant="outline-success">Submit</Button>{' '}
  </div>
</div>;
}