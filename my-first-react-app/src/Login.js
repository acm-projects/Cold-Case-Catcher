import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import GlobalStyle from "./GlobalStyle";
import { InnerLayout, OuterLayout } from './styles/Layouts'

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  
  return (
    <>
    <GlobalStyle />
    <OuterLayout>
    <ul className="login">
      <li>
      <div className='login-page-title'>Welcome to Cold Case Catcher</div>
        <div className="login__container">
          <div className="login-field">
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            /><br /><br />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            /><br /><br />
          </div>
          <center className='display-btns'>
            <div className="org-btns">
            <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            </div>
            <button className="login__google" onClick={signInWithGoogle}>
              Login with Google
            </button>
            <div>
              <Link to="/reset" className="change-color">Forgot Password?</Link>
            </div></center>
        </div>
        </li>

        <li><div className="vl"></div></li>
        
        <li>
          <div className="register_link2">
            Don't have an account? <Link to="/register" className="change-color">Register</Link> now.
          </div>
        </li>
    </ul>
    </OuterLayout>
    </>
  );
}

export default Login;