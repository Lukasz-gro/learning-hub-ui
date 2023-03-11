const ReactPrismEditor = require('react-prism-editor');

const code = `
console.log("hello world");
`;

export default function About() {
  return <ReactPrismEditor
    language='javascript'
    theme='tomorrow'
    code={code}
    lineNumber
    readOnly={false}
    clipboard={true}
    changeCode={(code: any) => {
      console.log(code);
    }}
/>;
}