import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ChatHistory {
  message: string;
  isUser: boolean;
}

export async function getChatHistory(userId: string, problemId: string): Promise<ChatHistory[]> {
  return (await axios.get(`/v1/chat-bot/${userId}/${problemId}/history`)).data as ChatHistory[];
}

export async function addMessage(userId: string, problemId: string, chatMessage: ChatHistory): Promise<any> {
  return (await axios.post(`/v1/chat-bot/${userId}/${problemId}`, { 
    message: chatMessage.message,
    isUser: chatMessage.isUser
  })).data as ChatHistory[];
}

export default function useChatHistory(userId: string, problemId: string) {
  const chatHistory = useQuery<ChatHistory[]>({ queryKey: [`problem${userId}_${problemId}`], queryFn: () => getChatHistory(userId, problemId) });

  const saveMessage = (chatMessage: ChatHistory) => {
    addMessage(userId, problemId, chatMessage)
      .then(console.log)
      .catch(console.log);
  };

  return { chatHistory, saveMessage } 
}