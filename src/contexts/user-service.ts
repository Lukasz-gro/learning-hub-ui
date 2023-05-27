import axios from "axios";

export interface JwtToken {
  token: string;
}

export async function registerUser(login: string, password: string, email: string): Promise<JwtToken> {
  return (await axios.get(`/v1/submit/${login}`)).data as JwtToken;
} 

export async function loginUser(login: string, password: string): Promise<JwtToken> {
  return (await axios.get(`/v1/submit/${login}`)).data as JwtToken;
} 