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
      let result = await axios.post("http://localhost:5000/login", {
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
    <div
      style={{
        background: "blue",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ marginTop: "30vh" }}>
        <h1>Please Fill The Login Form !!!</h1>
        <form>
          <input
            type="text"
            placeholder="Enter Email"
            style={{ width: "90%", marginBottom: "5%", padding: "8px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Enter Password"
            style={{ width: "90%", marginBottom: "5%", padding: "8px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <p>{items}</p>
          <button type="submit" onClick={(e) => collectdata(e)} style={{fontSize:"18px"}}>
            Login In
          </button>
          <button type="submit" onClick={redirecttoRegister} style={{fontSize:"18px"}}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
