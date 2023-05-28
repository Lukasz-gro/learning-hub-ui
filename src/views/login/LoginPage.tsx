import { useContext, useState } from "react";
import "./LoginPage.css";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"

type UserData = {
  login: string;
  password: string;
}

export default function LoginPage() {
  const userContext = useContext(UserContext);
  const [error, setError] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({ login: "", password: "" });
  const navigate = useNavigate();
  
  const login = () => {
    setError(false);
    userContext.loginUser(userData.login, userData.password)
      .then(res => {
        if (res) {
          navigate('/');
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
  };

  return (
    <>
    {error && <Alert variant='danger'>Error while trying to log in. Please try again</Alert>}
      <div className="login-container">
      <div className="user-font"><FontAwesomeIcon icon={faUser} size="xl" /></div>
        Log in<br/>
        <label >
          <input 
            value={userData.login} 
            placeholder="Login"
            onChange={e => setUserData({ ...userData, login: e.target.value })} />
        </label>
        <label >
          <input 
            value={userData.password} 
            type="password" 
            placeholder="Password"
            onChange={e => setUserData({ ...userData, password: e.target.value })} />
        </label>
        <button onClick={login} className="submitButton">Log in</button>
      </div>
    </>
  );
}