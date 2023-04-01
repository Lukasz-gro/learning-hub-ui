import { useState } from "react";
import { healthCheck } from "../../services/learning-hub";

export default function Homepage() {
    const [serverResponse, setServerResponse] = useState<string>('No request made')

    const talkWithServer = () => {
        healthCheck().then(setServerResponse).catch(console.log);
    };
    
    return <button onClick={talkWithServer}>Homepage</button>;
}