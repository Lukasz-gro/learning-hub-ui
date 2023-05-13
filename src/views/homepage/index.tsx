import { useState } from "react";
import axios from "axios";

export async function healthChecks(): Promise<string> {
    return (await axios.get('/v1/health-check')).data as string;
  }

export default function Homepage() {
    return (
        <div>
            Homepage of the best learning website in the world
        </div>
    );
}