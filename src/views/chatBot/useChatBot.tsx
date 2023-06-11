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
      'Authorization': 'Bearer YOUR_TOKEN',
      'Content-Type': 'application/json'
    }
  })).data as any;
}

export default function useChatBot(userId: string, problemId: string) {
  const { chatHistory, saveMessage } = useChatHistory(userId, problemId);
  
  const askQuestion = (message: string, prompt: string) => {
    saveMessage({ message, isUser: true });
    chatBot(prompt)
      .then(response => {
        console.log(response);
        console.log(response.choices[0].message.content);
        saveMessage({ message: response.choices[0].message.content, isUser: false });
      })
      .catch(console.log);
  };

  return { chatHistory, askQuestion }
}