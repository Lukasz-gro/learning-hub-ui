import './Label.css';

type Props = {
    askQuestion: (option: string, message: string) => void;
}

export default function QuestionForBotLabel({
    askQuestion
}: Props) {

    const question = () => {
        askQuestion(
            "I have a problem and don't know what to do. Could you help me?",
            "I don't know where the mistake is. Could you give me a hint. Don't explain in detail and don't write code."
        )
    };

    const question2 = () => {
        askQuestion(
            "I'm stuck. Could tell me where the mistake is?",
            "I don't know where the mistake is. Could you explain why it doesn't work, but don't write code."
        )
    };

    return(
        <div className="box-container">
            <div className="question-list">
                <div className="question" onClick={question}>Give me a hint!</div>
                <div className="question" onClick={question2}>Where is a mistake?</div>
                <div className="question">Explain me the exercise!</div>
            </div>
        </div>
    )
}