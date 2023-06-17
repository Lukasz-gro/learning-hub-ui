export interface ChatBotMessage {
  message: string;
  prompt: string;
}

export interface ChatBotData {
  description?: string;
  code?: string;
}

const chatBotContext = 'You are a teacher and you want to help your students understand algorithms. Always make sure that the person that asked question understand it correctly.';

export function hintWithCode({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'My code doesn\t work and I don\'t know why. Could you help me?',
    prompt: `${chatBotContext}
      This is problem statement: ${description}. 
      This is my code: ${code}.
      I don't know where the mistake is. Could you give me a hint. Don't explain in detail and don't write code.`
  }; 
}

export function findMistakeInCode({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'I can\'t find mistake in my code. Can you explain me what is wrong here?',
    prompt: `${chatBotContext}
      This is problem statement: ${description}. 
      This is my code: ${code}.
      I don't know where the mistake is. Could you explain why it doesn't work, but don't write code.`
  }
}

export function paraphraseDescription({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'I don\'t understand the problem. Could you explain it to me differently?',
    prompt: `${chatBotContext}
      This is problem statement: ${description}. 
      I don't understand it. Can you paraphrase it and provide different example how it should work? Don't write code.`
  }
}

export function paraphraseDescriptionTwo({ description, code }: ChatBotData, botAnswer: string): ChatBotMessage {
  return {
    message: 'I still don\'t understand the problem. Can you try to explain it to me differently?',
    prompt: `${chatBotContext}
      This is problem statement: ${description}. 
      You've answered one time and phrase the problem description in the following way: ${botAnswer}.
      Could you parabphrase it one more time differently? Don't write code.`
  }
}

export function hintForProblem({ description, code }: ChatBotData): ChatBotMessage {
  return {
    message: 'I don\'t know how to start. Can you tell me how should I begin?',
    prompt: `
      ${chatBotContext}
      This is problem statement: ${description}. 
      I don't know how to start or what algorithm should I use. Could you give me some hint that will help me start?`
  }
}

export function hintForProblem2({ description, code }: ChatBotData, botAnswer: string): ChatBotMessage {
  return {
    message: 'I\m still not sure how to proceed with this task. Can you give me another hint?',
    prompt: `
      ${chatBotContext}
      This is problem statement: ${description}.
      You've already given a hint and it's look like this: "${botAnswer}".
      I still don't know how to start. Can you give me another tip and tell me that now I should be able to do this?`
  }
}
