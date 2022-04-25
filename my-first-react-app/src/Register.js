import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "./firebase";
import "./Register.css";
import GlobalStyle from "./GlobalStyle";

export const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <>
    <GlobalStyle />
    <center><div className='login-page-title'>Create an Account</div></center>
    <div className="register">
      <div className="register__container">
      <div className="input_container">
        <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          /><br /><br />
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          /><br /><br />
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          /><br /><br />
          </div>
          <Link to='/profile'>
            <button className="register__btn" onClick={register}>
            Register
          </button></Link>
          <Link to='/register'>
          <button
          className="register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button></Link>
        <div className="change-color2">
          Already have an account? <Link to="/login" className="change-color">Login</Link> now.
        </div>
      </div>
    </div>
    </>
  );
}

export default Register