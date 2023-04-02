import { useState } from 'react';
import Button from '../../components/button/Button';
import './CodeEditor.css';

export default function CodeEditor() {
    const [code, setCode] = useState<string>();
    
    const sendCode = () => {
        console.log(code+"test");
    };

    return (
        <div className='editor-container'>
            <div>Code editor</div>
            <textarea onChange={(({ target: { value } }) => setCode(value))} className="code-editor" placeholder='Write youre code here'/>
            <Button onClick={sendCode} label="Send code"/>
        </div>
    );
}