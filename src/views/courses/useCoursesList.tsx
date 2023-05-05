import { useQuery } from '@tanstack/react-query'
import { getCoursesList } from './service';
import { Course } from './service.dto';

export default function useCoursesList() {
  return useQuery<Course[]>({ queryKey: ['courseList'], queryFn: getCoursesList });
}