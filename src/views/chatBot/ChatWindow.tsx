import QuestionForBotLabel from "./QuestionsForChatBotLabel";
import './ChatWindow.css';
import useChatBot from "./useChatBot";
import { Problem } from "../courses/service.dto";
import { ChatBotData } from "./MessageCreator";

type Props = {
    userId: string;
    problemId: string;
    problem?: Problem;
    code?: string;
}

export default function ChatWindow({
    userId,
    problemId,
    problem,
    code
}: Props) {
    const { chatHistory, askQuestion } = useChatBot(userId, problemId);

    const questionOption = (message: string, prompt: string, messageType: string) => {
        askQuestion(message, prompt, messageType);
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
            <QuestionForBotLabel askQuestion={questionOption} code={code} problem={problem} chatHistory={chatHistory.data}/>
        </div>
    )
}