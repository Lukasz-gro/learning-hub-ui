import axios from "axios";
import { Problem } from "../courses/service.dto";

export async function getProblem(problemId: string): Promise<Problem> {
  return (await axios.get(`/v1/problem/${problemId}`)).data as Problem;
}
