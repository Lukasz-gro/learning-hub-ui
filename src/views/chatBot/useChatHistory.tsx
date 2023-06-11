import axios from "axios";
import { useEffect, useState } from "react";

interface ChatHistory {
  message: string;
  isUser: boolean;
}

export async function getChatHistory(userId: string, problemId: string): Promise<ChatHistory[]> {
  return (await axios.get(`/v1/chat-bot/${userId}/${problemId}/history`)).data as ChatHistory[];
}

export async function addMessage(userId: string, problemId: string, chatMessage: ChatHistory): Promise<any> {
  return (await axios.post(`/v1/chat-bot/add-message`, { 
    message: chatMessage.message,
    isUser: chatMessage.isUser,
    username: userId,
    problemId
  })).data as ChatHistory[];
}

export default function useChatHistory(userId: string, problemId: string) {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [fetchData, setFetchData] = useState<number>(0);

  useEffect(() => {
    getChatHistory(userId, problemId)
      .then(setChatHistory)
      .catch(console.log);
  }, [fetchData]);

  const saveMessage = (chatMessage: ChatHistory) => {
    addMessage(userId, problemId, chatMessage)
      .then(() => setFetchData(prev => prev + 1))
      .catch(console.log);
  };

  return { chatHistory: { isLoading: false, data: chatHistory }, saveMessage } 
}