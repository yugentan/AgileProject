import React from "react";
import style from "./styles/signup.css";
import { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [uAllow, setUAllow] = useState(true)
  const [pAllow, setPAllow] = useState(true)
  const [eAllow, setEAllow] = useState(true)
  const userNameOnChange = (e) => {
    setUsername(e.target.value);
    if(e.target.value.length > 4){
        setUAllow(false)
    }
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length > 7){
        setPAllow(false)
    }
  };
  const emailOnChange = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length > 5){
        setEAllow(false)
    }
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:7000/user/signup", { userName: username, passWord: password, email: email })
      .then((res) => {
        alert("User sign up success")
      })
      .catch((err) => {
        alert("User Exist")
      });
  };
  return (
    <div>
        <div style={{display:"flex", flexDirection:"column"}}>

       
      <input
        type="text"
        onChange={userNameOnChange}
        placeholder="Enter your username"
      ></input>
      <input
        type="password"
        onChange={passwordOnChange}
        placeholder="Enter your password"
      ></input>
      <input
        type="email"
        onChange={emailOnChange}
        placeholder="Enter your email"
      ></input>
      <button onClick={handleSubmit} disabled={uAllow || eAllow || pAllow}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
