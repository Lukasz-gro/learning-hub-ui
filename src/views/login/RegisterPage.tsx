import { useContext, useState } from "react";
import "./LoginPage.css";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";

type UserData = {
  login: string;
  password: string;
  email: string;
}

export default function RegisterPage() {
  const userContext = useContext(UserContext);
  const [error, setError] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({ login: "", password: "", email: "string" });
  const navigate = useNavigate();
  
  const register = () => {
    setError(false);
    userContext.registerUser(userData.login, userData.password, userData.email)
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
        <label >
          <input 
            value={userData.email} 
            placeholder="e-mail"
            onChange={e => setUserData({ ...userData, email: e.target.value })} />
        </label>
        <button onClick={register} className="submitButton">Log in</button>
      </div>
    </>
  );
}