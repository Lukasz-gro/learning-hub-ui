import { createContext, FC, ReactNode, useState, useEffect} from "react";
import { checkSubmitStatus } from "../services/learning-hub";
import useNotifications from "../notifications/useNotifications";

type SubmitStatus = {
  addStatusListener?: (id: string) => void;
}

type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

export const SubmitStatusContext = createContext<SubmitStatus>({ addStatusListener: () => {} });

const SubmitStatusProvider: FC<PropsWithChildren<SubmitStatus>> = ({ children }) => {
  const [submitIds, setSubmitIds] = useState<string[]>([]);
  const { notifySuccess, notifyError } = useNotifications();

  const addStatusListener = (id: string) => {
    setSubmitIds(prev => [...prev, id]);  
  }

  const removeIdFromList = (id: string) => {
    const newArr = submitIds.slice();
    newArr.splice(newArr.indexOf(id), 1);
    return newArr;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      for (const submitId of submitIds) {
        checkSubmitStatus(submitId)
          .then(response => {
            if (response.status === 'OK') {
              const newArr = removeIdFromList(submitId);
              notifySuccess(`Submit ${response.id}: success!`);
              setSubmitIds(newArr);
            } else if (response.status !== 'QUE') {
              const newArr = removeIdFromList(submitId);
              notifyError(`Submit ${response.id}: failed!`);
              setSubmitIds(newArr);
            }
          });
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, [submitIds]);

  return (
    <SubmitStatusContext.Provider value={{ addStatusListener }}>
      {children}
    </SubmitStatusContext.Provider>
  )
}

export default SubmitStatusProvider;