import QuestionForBotLabel from "./QuestionsForChatBotLabel";
import './ChatWindow.css';
import useChatBot from "./useChatBot";

type Props = {
    userId: string;
    problemId: string;
    createMessage: (option: string) => string;
}

export default function ChatWindow({
    userId,
    problemId,
    createMessage
}: Props) {
    const { chatHistory, askQuestion } = useChatBot(userId, problemId);

    const questionOption = (question: string, prompt: string) => {
        askQuestion(question, createMessage(prompt));
    };
    
    const selectClassName = (isUser: boolean) => {
        return isUser ? "user-question" : "bot-answer";
    };
    
    const textHeader = (isUser: boolean) => {
        return isUser ? <><b>Your Question: </b><br/></> : <><b>Tutor Answer: </b><br/></>;
    };
    
    return (
        <div className="problem-description">
            <div className="problem-name">
                <h4>ChatBot</h4>
            </div>
            <div className="Chat-bot-content">
                { !chatHistory.isLoading &&  chatHistory.data?.map((item, index) => (<div key={index} className={selectClassName(item.isUser)}>
                    {textHeader(item.isUser)}
                    {item.message}
                </div>))
                } 
            </div>
            <QuestionForBotLabel askQuestion={questionOption}/>
        </div>
    )
}