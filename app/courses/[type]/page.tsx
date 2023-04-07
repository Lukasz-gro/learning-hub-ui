'use client';

import { useRouter, usePathname } from "next/navigation";

type RouteParams = {
  type: string;
}

export default function CourseView({ params }: { params: RouteParams }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <h1>Courses to choose</h1>
      <button onClick={() => {router.push(pathname + '/' + params.type)}}>Click me to solve first problem</button>
    </>
    
  );
}
