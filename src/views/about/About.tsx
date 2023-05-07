import './About.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeIcon } from './ThemeIcon';

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

export enum Theme {
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
  const [code, setCode] = useState<string>("Hello");
  const [codeResult, setCodeResult] = useState<string>();

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
  <div className="editor-actions">
    <Button onClick={()=>{}} variant="outline-success">Submit</Button>
  </div>
  { codeResult && <div>{codeResult}</div> }
</div>;
}