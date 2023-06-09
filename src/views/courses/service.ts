import axios from "axios";
import { Course, Problem } from "./service.dto";

export async function getCoursesList(): Promise<Course[]> {
  return (await axios.get('/v1/auth/course/all')).data as Course[];
}

export async function getCourseProblems(courseId: string): Promise<Problem[]> {
  return (await axios.get(`/v1/auth/course/${courseId}/problems`)).data as Problem[];
}