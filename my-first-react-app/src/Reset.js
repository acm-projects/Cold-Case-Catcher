import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./Reset.css";
import GlobalStyle from "./GlobalStyle";

export const Reset = () => {

  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <>
    <GlobalStyle />
    <center><div className='reset-title'>Reset Your Password</div></center>
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        /><br /><br />
        </div>
        <center className="fix-btns">
          <button
            className="reset__btn"
            onClick={() => sendPasswordReset(email)}
          >
            Send
          </button>
          <div>
            Don't have an account? <Link to="/register" className="change-color">Register</Link> now.
          </div></center>
    </div>
    </>
  );
}

export default Reset