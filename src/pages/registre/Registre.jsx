import { useRef } from "react";
import { useState } from "react";
import "./Registre.scss";
import { useHistory } from 'react-router-dom';

export default function Register() {
  const history = useHistory();// for routing
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
    history.push("/home")
  };
  const handleLogin = () =>{
    history.push("/login")
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}