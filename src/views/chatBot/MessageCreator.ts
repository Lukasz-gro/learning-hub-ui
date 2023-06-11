export interface ChatBotMessage {
  message: string;
  prompt: string;
}

export interface ChatBotData {
  description?: string;
  code?: string;
}

export function hintWithCode({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'My code doesn\t work and I don\'t know why. Could you help me?',
    prompt: `This is problem statement: ${description}. 
      This is my code: ${code}.
      I don't know where the mistake is. Could you give me a hint. Don't explain in detail and don't write code.`
  }; 
}

export function findMistakeInCode({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'I can\'t find mistake in my code. Can you explain me what is wrong here?',
    prompt: `This is problem statement: ${description}. 
      This is my code: ${code}.
      I don't know where the mistake is. Could you explain why it doesn't work, but don't write code.`
  }
}

export function paraphraseDescription({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'I don\'t understand the problem. Could you explain it to me differently?',
    prompt: `This is problem statement: ${description}. 
      I don't understand it. Can you paraphrase it and provide different example how it should work? Don't write code.`
  }
}

export function hintForProblem({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'I don\'t know how to start. Can you tell me how should I begin?',
    prompt: `This is problem statement: ${description}. 
      I don't know how to start or what algorithm shoul I use. Could you give me some hint that will help me start?`
  }
}
