import React,{useState} from 'react'
import axios from "axios";
import {useNavigate } from 'react-router-dom';
const Register=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const navigate = useNavigate();
  const collectdata = async(e)=>{
    e.preventDefault();
    try{
      if(name.length<6){
          alert("Name is too Small");
      }
      else if(name.length>=16){
        alert("Name is too long");
      }
      else if(password!==cpassword)
      {
        alert("password and confirm password not equal");
      }
      else if(password.length<6)
      {
        alert("password is too short min 6 lenght required");
      }
      else
      {
      let result = await axios.post("https://anu-backend.onrender.com/register",{
      name,
      email,
      password,
      cpassword
    })
    console.log(result.data);
    navigate("/login");
    }
  }
  catch(e){
    console.log(e)
  }  
  }
  const redirecttoLogin=()=>{
    navigate("/login");
  }
  return (
    <div className="loginregisterform">
        <div>
        <h1 id="loginpara">Please Fill The Register Form !!!</h1>
        <form className="formdiv">
        <input type="text" placeholder='Enter Name'
        id="forminputfield"
        onChange={(e)=> setName(e.target.value)}
        /><br></br>
        <input type="text" placeholder='Enter Email' 
        id="forminputfield" onChange={(e)=> setEmail(e.target.value)}
        />
        <br></br>
        <input type="password" placeholder='Enter Password' 
         id="forminputfield" onChange={(e)=> setPassword(e.target.value)}
        /><br></br>

        <input type="password" placeholder='Confirm Password' 
        id="forminputfield" onChange={(e)=> setcPassword(e.target.value)}
        /><br></br>
        <div className="loginregisterbuttondiv">
        <button type="submit" id="loginButton" onClick={(e)=>collectdata(e)} style={{fontSize:"18px"}}>Register</button>
        <button type="submit" id="loginButton" onClick={redirecttoLogin} style={{fontSize:"18px"}}>
            Login
          </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Register