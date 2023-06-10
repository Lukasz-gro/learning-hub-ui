import axios from "axios"

export async function healthCheck(): Promise<string> {
  return (await axios.get('/v1/health-check')).data as string;
}

export interface Submit {
  id: string;
  code: string;
  status: string;
  errorMessage: string;
}

export async function queueCode(code: string | undefined, language: string, problemId: number, testCase: number): Promise<Submit> {
  return (await axios.post('/v1/judge/queue-code', {
    code,
    language,
    problemId,
    testCase
  })).data as Submit;
}

export async function checkSubmitStatus(id: string): Promise<Submit> {
  return (await axios.get(`/v1/auth/submit/${id}`)).data as Submit;
} 