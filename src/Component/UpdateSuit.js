import React, { useState,useEffect } from 'react'
import NavBar from "./NavBar"
import axios from "axios"
import { useNavigate,useParams } from 'react-router-dom';
function UpdateSuit() {
  const navigate = useNavigate();
  const[type ,setType]=useState("");
  const[company ,setCompany]=useState("");
  const[price ,setPrice]=useState("");
  const[available ,setAvailable]=useState("");
  const[image ,setImage]=useState("");
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async()=>{
    let result = await axios.get(`http://localhost:5000/updatesuit/${params.id}`)
    if(result){
        setType(result.data.type);
        setCompany(result.data.company);
        setPrice(result.data.price);
        setAvailable(result.data.available); 
        setImage(result.data.image);
    }
  }
  


  const updatedata=async(e)=>{
    e.preventDefault();
     
        try{
        let result= await axios.put(`http://localhost:5000/updatesuit/${params.id}`,{
          type,
          company,
          price,
          available,
          image
        })
        navigate("/suit");

      }
      catch(e){
        console.log(e);
      }
  }
  return (
        <>
        <NavBar />
        <div style={{background: "black",height: "100vh",marginTop:"-1%"}}>
          <h1 style={{textAlign:"center",color:"#ffff"}}>Update The field value you want to update</h1>
            <form className="formsaree">
              <div>
                <input type="text" value={type} placeholder='Enter type of saree' className='inputfield' onChange={(e)=>setType(e.target.value)}/><br></br>
                <input type="text" value={company} placeholder='Enter Company Name'className='inputfield'onChange={(e)=>setCompany(e.target.value)}/><br></br>
                <input type="text" value={price} placeholder='Enter Price'className='inputfield' onChange={(e)=>setPrice(e.target.value)}/><br></br>
                <input type="text" value={available} placeholder='Available'className='inputfield' onChange={(e)=>setAvailable(e.target.value)}/><br></br>
                <input type="text" value={image} placeholder='Saree drive link'className='inputfield' onChange={(e)=>setImage(e.target.value)}/><br></br>
                <button type="submit" onClick={updatedata}>Upload</button>
                </div>
            </form>
        </div>
        </>
  )
}

export default UpdateSuit