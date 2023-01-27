import React,{useState} from 'react'
import axios from "axios";
const Login=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectdata = async()=>{
    let result = await axios.post("http://localhost:5000/login",{
      name,
      email,
      password,
    }).then((response)=>{
      console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
     
  }
  return (
    <div style={{background:"blue" ,display:"flex",justifyContent:"center",height:"100vh"}}>
        <div style={{marginTop:"30vh"}}>
        <h1>Please Fill The Form !!!</h1>
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
        <button type="submit" onClick={collectdata}>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Login