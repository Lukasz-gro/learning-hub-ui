import axios from "axios";
import { Course } from "./service.dto";

export async function getCoursesList(): Promise<Course[]> {
  const mockCourse = (id: number) => ({
    id,
    name: "Basic DSA",
    description: "Course in basic algorithm and data structures that will teach you things like binary search"
  } as Course);
  // return (await axios.get('/v1/courses')).data as Course[];
  return new Array(3).fill(0).map((i, index) => mockCourse(index));
}