import { useState } from "react";
import useChatHistory from "./useChatHistory";
import axios from "axios";

async function chatBot(message: string): Promise<any> {
  return (await axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": message }],
    temperature: 0.1,
    max_tokens: 256
  }, {
    headers: {
      'Authorization': 'Bearer ADD_YOUR_API_TOKEN',
      'Content-Type': 'application/json'
    }
  })).data as any;
}

export default function useChatBot(userId: string, problemId: string) {
  const { chatHistory, saveMessage } = useChatHistory(userId, problemId);
  
  const askQuestion = (message: string, prompt: string) => {
    saveMessage({ message, isUser: true });
    chatBot(message)
      .then(response => {
        console.log(response.content);
        saveMessage({ message: response.content, isUser: false });
      })
      .catch(console.log);
  };

  return { chatHistory, askQuestion }
}