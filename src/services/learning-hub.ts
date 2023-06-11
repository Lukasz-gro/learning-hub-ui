import axios from "axios"

export async function healthCheck(): Promise<string> {
  return (await axios.get('/v1/health-check')).data as string;
}

export interface Submit {
  id: string;
  code: string;
  status: string;
  errorMessage: string;
  date: string;
}

export async function queueCode(username: string, code: string | undefined, language: string, problemId: number, testCase: number): Promise<Submit> {
  return (await axios.post('/v1/judge/queue-code', {
    username,
    code,
    language,
    problemId,
    testCase
  })).data as Submit;
}

export async function checkSubmitStatus(id: string): Promise<Submit> {
  return (await axios.get(`/v1/submit/${id}`)).data as Submit;
} 