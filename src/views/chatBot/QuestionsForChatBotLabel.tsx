import { Problem } from '../courses/service.dto';
import './Label.css';
import { findMistakeInCode, hintWithCode, paraphraseDescription } from './MessageCreator';

type Props = {
    askQuestion: (option: string, message: string) => void;
    problem?: Problem;
    code?: string;
}

export default function QuestionForBotLabel({
    askQuestion,
    problem,
    code
}: Props) {

    const askForHint = () => {
        const { message, prompt } = hintWithCode({ code, description: problem?.description });
        askQuestion(message, prompt);
    };

    const askCodeError = () => {
        const { message, prompt } = findMistakeInCode({ code, description: problem?.description });
        askQuestion(message, prompt);
    };

    const askDescription = () => {
        const { message, prompt } = paraphraseDescription({ code, description: problem?.description });
        askQuestion(message, prompt);
    }
    
    return(
        <div className="box-container">
            <div className="question-list">
                <div className="question" onClick={askForHint}>Give me a hint!</div>
                <div className="question" onClick={askCodeError}>Where is a mistake?</div>
                <div className="question" onClick={askDescription}>Explain me the exercise!</div>
            </div>
        </div>
    )
}