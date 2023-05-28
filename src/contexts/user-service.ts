import axios from "axios";

export interface JwtToken {
  token: string;
}

export async function registerUser(username: string, password: string, email: string): Promise<JwtToken> {
  return (await axios.post(`/v1/auth/register`, { username, password, email })).data as JwtToken;
}

export async function loginUser(username: string, password: string): Promise<JwtToken> {
  return (await axios.post(`/v1/auth/authenticate`, { username, password })).data as JwtToken;
}
