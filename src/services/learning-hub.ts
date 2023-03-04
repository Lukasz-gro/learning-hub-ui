import axios from "axios"

export async function healthCheck(): Promise<string> {
  return (await axios.get('/v1/health-check')).data as string;
}