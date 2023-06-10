import { useEffect, useState } from "react";
import { checkSubmitStatus } from "../../services/learning-hub";

export default function useProblemStatus() {
  const [submitId, setSubmitId] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (submitId !== "") {
        checkSubmitStatus(submitId)
          .then(response => {
            setStatus(response.errorMessage);
            if (response.status !== 'QUE') {
              console.log("JAZDA2");
              setSubmitId("");
            }
          })
          .catch(() => console.log("Error while checking status"));
          }
    }, 5000);

    return () => {
      clearInterval(intervalTime);
    }
  }, [submitId]);

  const listenStatusChange = (newSubmitId: string) => {
    setSubmitId(newSubmitId);
  };

  return { status, listenStatusChange, setStatus }
}