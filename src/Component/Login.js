import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState("");


  const collectdata = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post("https://anu-backend.onrender.com/login", {
        email,
        password,
      });
      console.log(result);
      console.log(typeof(result.data.name))
      if(result.data.name){
        console.log("annder aa gaye")
        localStorage.setItem("user",JSON.stringify(result.data.name));
        if(result.data.email==="priyanshusingh1877@gmail.com"){
        localStorage.setItem("email",email);
        }
        
        navigate("/");
      }

    } catch (e) {
      alert("something wrong");
      console.log(e)
    }
  };

  const redirecttoRegister=()=>{
      navigate("/register")
  }
  return (
    <div className="loginregisterform">
      <div>
        <h1 id="loginpara">Please Fill The Login Form !!!</h1>
        
        <form className="formdiv">
          <input
            type="text"
            placeholder="Enter Email"
            id="forminputfield"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Password"
            id="forminputfield"
            onChange={(e) => setPassword(e.target.value)} 
          />
          <br></br>
          <p>{items}</p>
          <div className="loginregisterbuttondiv">
          <button type="submit" id="loginButton"onClick={(e) => collectdata(e)} style={{fontSize:"18px"}}>
            Login In
          </button>
          <button type="submit" id="loginButton" onClick={redirecttoRegister} style={{fontSize:"18px"}}>
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
