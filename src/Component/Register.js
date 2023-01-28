import React,{useState} from 'react'
import axios from "axios";
const Register=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const collectdata = async(e)=>{
    e.preventDefault();
    try{
    let result = await axios.post("http://localhost:5000/register",{
      name,
      email,
      password,
      cpassword
    })
    console.log(result.data);
  }
  catch(e){
    console.log(e)
  }
  setName("");
  setEmail("");
     
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
        <button type="submit" onClick={(e)=>collectdata(e)}>Register</button>
        </form>
        </div>
    </div>
  )
}

export default Register