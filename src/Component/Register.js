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
      let result = await axios.post("http://localhost:5000/register",{
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
    <div style={{background:"blue" ,display:"flex",justifyContent:"center",height:"100vh"}}>
        <div style={{marginTop:"30vh"}}>
        <h1>Please Fill The Register Form !!!</h1>
        <form>
        <input type="text" placeholder='Enter Name'
        style={{width:"90%", marginBottom:"5%",padding:"8px"}}
        onChange={(e)=> setName(e.target.value)}
        /><br></br>
        <input type="text" placeholder='Enter Email' 
        style={{width:"90%", marginBottom:"5%",padding:"8px"}}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <br></br>
        <input type="text" placeholder='Enter Password' 
         style={{width:"90%", marginBottom:"5%",padding:"8px"}}
         onChange={(e)=> setPassword(e.target.value)}
        /><br></br>

        <input type="text" placeholder='Confirm Password' 
         style={{width:"90%", marginBottom:"5%",padding:"8px"}}
         onChange={(e)=> setcPassword(e.target.value)}
        /><br></br>
        <button type="submit" onClick={(e)=>collectdata(e)} style={{fontSize:"18px"}}>Register</button>
        <button type="submit" onClick={redirecttoLogin} style={{fontSize:"18px"}}>
            Login
          </button>
        </form>
        </div>
    </div>
  )
}

export default Register