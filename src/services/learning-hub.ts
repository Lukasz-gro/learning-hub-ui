import axios from "axios"

export async function healthCheck(): Promise<string> {
  return (await axios.get('/v1/health-check')).data as string;
}

export async function runCode(code: string, language: string, problemId: number, testCase: number): Promise<string> {
  return (await axios.post('/v1/judge/run-code', {
    code,
    language,
    problemId,
    testCase
  })).data as string;
}
