import { Spinner } from 'react-bootstrap';
import { Problem } from '../courses/service.dto';
import './Label.css';
import { findMistakeInCode, hintForProblem, hintForProblem2, hintWithCode, paraphraseDescription, paraphraseDescriptionTwo } from './MessageCreator';
import { ChatHistory } from './useChatHistory';

type Props = {
    askQuestion: (option: string, message: string, messageType: string) => void;
    problem?: Problem;
    code?: string;
    chatHistory: ChatHistory[];
}

export default function QuestionForBotLabel({
    askQuestion,
    problem,
    code,
    chatHistory
}: Props) {

    const askForHint = () => {
        const { message, prompt } = hintWithCode({ code, description: problem?.description });
        askQuestion(message, prompt, 'HINT');
    };

    const askCodeError = () => {
        const { message, prompt } = findMistakeInCode({ code, description: problem?.description });
        askQuestion(message, prompt, 'CODE_MISTAKE');
    };

    const askDescription = () => {
        const { message, prompt } = paraphraseDescription({ code, description: problem?.description });
        askQuestion(message, prompt, `PARAPHRASE_1`);
    }

    const askDescription2 = () => {
        const botAnswer = chatHistory.findIndex(item => (item.messageType === 'PARAPHRASE_1')) + 1;
        const { message, prompt } = paraphraseDescriptionTwo({ code, description: problem?.description }, chatHistory[botAnswer].message);
        askQuestion(message, prompt, `PARAPHRASE_2`);
    }
    
    const askFirstHint = () => {
        const { message, prompt } = hintForProblem({ code, description: problem?.description });
        askQuestion(message, prompt, 'HINT_NO_CODE_1');
    }
    
    const askSecondHint = () => {
        const botAnswer = chatHistory.findIndex(item => (item.messageType === 'HINT_NO_CODE_1')) + 1;
        const { message, prompt } = hintForProblem2({ code, description: problem?.description }, chatHistory[botAnswer].message);
        askQuestion(message, prompt, 'HINT_NO_CODE_2');
    }

    const hasParaphrase1 = () => {
        return chatHistory.findIndex(item => (item.messageType === 'PARAPHRASE_1')) !== -1;
    };

    const hasParaphrase2 = () => {
        return chatHistory.findIndex(item => (item.messageType === 'PARAPHRASE_2')) !== -1;
    };

    const showParaphrase2 = () => {
        return hasParaphrase1() && !hasParaphrase2();
    };

    const showHintNoCode1 = () => {
        return chatHistory.findIndex(item => (item.messageType === 'HINT_NO_CODE_1')) === -1;
    };

    const showHintNoCode2 = () => {
        return !showHintNoCode1() && chatHistory.findIndex(item => (item.messageType === 'HINT_NO_CODE_2')) === -1;
    };

    const hintCounter = () => {
        return chatHistory.filter(item => (item.messageType === 'HINT')).length / 2;
    }

    const showHint = () => {
        return hintCounter() < 3;
    };

    const mistakeCounter = () => {
        return chatHistory.filter(item => (item.messageType === 'CODE_MISTAKE')).length / 2;
    }

    const showMistake = () => {
        return mistakeCounter() < 3;
    };

    return(
        <div className="box-container">
            <div className="question-list">
                {chatHistory.length % 2 === 1 && <Spinner />}
                {chatHistory.length % 2 === 0 && 
                <>
                    {showHintNoCode1() && <div className="question" onClick={askFirstHint}>Help me start.</div>}
                    {showHintNoCode2() && <div className="question" onClick={askSecondHint}>Give me more help.</div>}
                    {!hasParaphrase1() && <div className="question" onClick={askDescription}>Explain me the exercise!</div>}
                    {showParaphrase2() && <div className="question" onClick={askDescription2}>I still don't understand.</div>}
                    {showHint() && <div className="question" onClick={askForHint}>Give me a hint ({hintCounter()+1}/3)</div>}
                    {showMistake() && <div className="question" onClick={askCodeError}>Where is a mistake? ({mistakeCounter()+1}/3)</div>}
                </>}
            </div>
        </div>
    )
}