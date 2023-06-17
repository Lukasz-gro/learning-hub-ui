import { useState } from "react";
import useChatHistory from "./useChatHistory";
import axios from "axios";

async function chatBot(message: string): Promise<any> {
  return (await axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-3.5-turbo",
    messages: [{"role": "assistant", "content": message }],
    temperature: 0.25,
    max_tokens: 2048
  }, {
    headers: {
      'Authorization': 'Bearer YOUR_KEY',
      'Content-Type': 'application/json'
    }
  })).data as any;
}

async function deleteLastMessage(userId: string, problemId: string) {
  return (await axios.delete(`/v1/chat-bot/${userId}/${problemId}/delete-last-message`))
}

export default function useChatBot(userId: string, problemId: string) {
  const { chatHistory, saveMessage } = useChatHistory(userId, problemId);
  
  const askQuestion = (message: string, prompt: string, messageType: string) => {
    saveMessage({ message, isUser: true, messageType });
    chatBot(prompt)
      .then(response => {
        saveMessage({ message: response.choices[0].message.content, isUser: false, messageType });
      })
      .catch(err => {
        console.log(err);
        deleteLastMessage(userId, problemId);
      });
  };

  return { chatHistory, askQuestion }
}