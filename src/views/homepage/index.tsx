import { useState } from "react";
import axios from "axios";

export async function healthChecks(): Promise<string> {
    return (await axios.get('/v1/health-check')).data as string;
  }

export default function Homepage() {
    const [serverResponse, setServerResponse] = useState<string>('No request made')

    const talkWithServer = () => {
        healthChecks().then(setServerResponse).catch(console.log);
    };
    console.log(process.env);
    return <button onClick={talkWithServer}>Health check</button>;
}