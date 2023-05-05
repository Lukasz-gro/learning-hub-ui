import { useQuery } from '@tanstack/react-query'
import { getCourseProblems } from './service';
import { Problem } from './service.dto';

export default function useCourseProblems(courseId?: string) {
  if (!courseId) {
    return { isLoading: false, isError: true, data: undefined };
  }
  return useQuery<Problem[]>({ queryKey: [`courseList${courseId}`], queryFn: () => getCourseProblems(courseId) });
}