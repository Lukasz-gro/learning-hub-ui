export interface Course {
  id: number,
  name: string,
  description: string,
  shortDescription?: string;
}

export interface Problem {
  id: number,
  name: string,
  description: string,
  status?: string
}
