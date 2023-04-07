'use client';

import TextEditor from "./(components)/TextEditor";

type RouteParams = {
  type: string;
  id: string;
}

export default function ProblemView({ params }: { params: RouteParams }) {
  return (
    <div>
      I'm code editor and this is the problem {params.id}
      <TextEditor />
    </div>
  );
}