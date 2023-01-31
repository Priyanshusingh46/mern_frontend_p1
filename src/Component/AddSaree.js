import React, { useState } from 'react'
import NavBar from "./NavBar"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function AddSaree() {
  const navigate = useNavigate();
  const[type ,setType]=useState("");
  const[company ,setCompany]=useState("");
  const[price ,setPrice]=useState("");
  const[available ,setAvailable]=useState("");
  const[image ,setImage]=useState("");


  const uploaddata=async(e)=>{
    e.preventDefault();
      if(!type || !company || !price || !available || !image)
      {
        alert("Please Fill all Data");
      }
      else{
        try{
        let result= await axios.post("http://localhost:5000/addsaree",{
          type,
          company,
          price,
          available,
          image
        })
        console.log(result);
        navigate("/");

      }
      catch(e){
        console.log(e);
      }
      }
  }
  return (
        <>
        <NavBar />
        <div style={{background: "black",height: "100vh",marginTop:"-1%"}}>
          <h1 style={{textAlign:"center",color:"#ffff"}}>Please Fill Saree details</h1>
            <form className="formsaree">
              <div>
                <input type="text" placeholder='Enter type of saree' className='inputfield' onChange={(e)=>setType(e.target.value)}/><br></br>
                <input type="text" placeholder='Enter Company Name'className='inputfield'onChange={(e)=>setCompany(e.target.value)}/><br></br>
                <input type="text" placeholder='Enter Price'className='inputfield'onChange={(e)=>setPrice(e.target.value)}/><br></br>
                <input type="text" placeholder='Available'className='inputfield'onChange={(e)=>setAvailable(e.target.value)}/><br></br>
                <input type="file" placeholder='Saree link'className='inputfield'onChange={(e)=>setImage(e.target.value)}/><br></br>
                <button type="submit" onClick={uploaddata}>Upload</button>
                </div>
            </form>
        </div>
        </>
  )
}

export default AddSaree