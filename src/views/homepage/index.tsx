import { useState } from "react";
import axios from "axios";
import "./Homepage.css"
import "./BrainAnimation.css"
import "./Background.css"
import Test from "./BrainAnimation";
export async function healthChecks(): Promise<string> {
    return (await axios.get('/v1/health-check')).data as string;
  }

export default function Homepage() {
    return (
        <div className="homepage-container">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <div className="brain-animation">
                <Test></Test>
            </div>
            <div className="website-desription">
            <h3 style={{color: "#c2bdbd"}}>Learn algorithms with <b style={{color: "#188abb"}}>AI</b>! </h3>
            Our platform provides interactive tutorials, personalized learning paths, and hands-on coding exercises. Master complex <b style={{color: "#188abb"}}>algorithms</b> and data structures through step-by-step explanations and real-world examples. Enhance your programming skills with instant feedback and guidance from our intelligent <b style={{color: "#188abb"}}>AI</b> system.
            <br/><a href="" style={{color: "#c2bdbd"}}>Start your algorithmic journey today!</a>
            </div>

        </div>
    );
}