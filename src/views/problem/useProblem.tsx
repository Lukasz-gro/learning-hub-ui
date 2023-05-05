import { useQuery } from '@tanstack/react-query'
import { Problem } from '../courses/service.dto';
import { getProblem } from './service';

export default function useCoursesList(problemId: string) {
  return useQuery<Problem>({ queryKey: [`problem${problemId}`], queryFn: () => getProblem(problemId) });
}