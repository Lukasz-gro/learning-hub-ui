import { useState } from "react";
import { Submit } from "../../services/learning-hub";

export default function useSubmitHistory() {
  const [selectedSubmit, setSelectedSubmit] = useState<Submit>({} as Submit);

  return { selectedSubmit, setSelectedSubmit };
}