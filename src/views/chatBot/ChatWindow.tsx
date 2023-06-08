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
    }
    
    return (
        <div className="problem-description">
            <div className="problem-name">
                <h4>ChatBot</h4>
            </div>
            <div className="Chat-bot-content">
                { !chatHistory.isLoading &&  chatHistory.data?.map((item, index) => (<div key={index} className={selectClassName(item.isUser)}>
                    {item.message}
                </div>))
                } 
                {/* <div className="bot-answer"><b>Tutor Answer: </b><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className="user-question"><b>Your Question: </b><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className="bot-answer"><b>Tutor Answer: </b><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className="user-question"><b>Your Question: </b><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div> */}
            </div>
            <QuestionForBotLabel askQuestion={questionOption}/>
        </div>
    )
}