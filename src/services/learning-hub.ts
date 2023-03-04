import axios from "axios"

export async function healthCheck(): Promise<string> {
  return (await axios.get('https://learning-hub-server-production.up.railway.app/v1/health-check')).data as string;
}