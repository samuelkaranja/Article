import React from "react";
import "./style.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login-page">
      <h2>Sign In With Google</h2>
      <button className="gbtn" onClick={SignInWithGoogle}>
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://i.ibb.co/ydLySMx/google.png"
              alt="google-logo"
            />
          </div>
          <p className="btn-text">Sign In With Google</p>
        </div>
      </button>
    </div>
  );
};

export default Login;
