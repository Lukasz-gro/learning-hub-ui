
import './About.css';
import Dropdown from 'react-bootstrap/Dropdown';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';

const code = `
console.log("hello world");
`;
enum Language {
  CPP = "C++",
  PYTHON = "Python", 
  JAVA = "Java"
}

const mapOfLanguages = new Map<Language, string>()
    .set(Language.CPP, "cpp")
    .set(Language.JAVA, "java")
    .set(Language.PYTHON, "python");

export default function About() {
  const [language, setLanguage] = useState<Language>(Language.CPP); 
  return <div className="editor-container">
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {language}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Object.values(Language).map(value => <Dropdown.Item key={value} onClick={() => setLanguage(value)}>{value}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="editor-field"><CodeEditor
  value={code}
  language={mapOfLanguages.get(language)}
  placeholder={`Please enter ${language} code.`}
  onChange={(evn) => {}}
  padding={15}
  data-color-mode="dark"
  style={{
    fontSize: 15,
    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
  }}
/></div></div>;
}