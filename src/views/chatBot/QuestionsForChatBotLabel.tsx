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
            "I don't know where the mistake is. Could you give me a hint, but don't write code."
        )
    };

    return(
        <div className="box-container">
            <div className="question-list">
                <div className="question" onClick={question}>Give me a hint!</div>
                <div className="question">Where is a mistake?</div>
                <div className="question">Explain me the exercise!</div>
            </div>
        </div>
    )
}