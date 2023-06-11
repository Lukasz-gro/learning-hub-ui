import axios from "axios";
import { Problem } from "../courses/service.dto";
import { Submit } from "../../services/learning-hub";

export async function getProblem(problemId: string): Promise<Problem> {
  return (await axios.get(`/v1/auth/problem/${problemId}`)).data as Problem;
}

export async function getSubmitHistory(login: string, problemId: string): Promise<Submit[]> {
  return (await axios.get(`/v1/submit/${login}/${problemId}/history`)).data as Submit[];
}