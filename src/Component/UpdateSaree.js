import React, { useState,useEffect } from 'react'
import NavBar from "./NavBar"
import axios from "axios"
import { useNavigate,useParams } from 'react-router-dom';
function UpdateSaree() {
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
    console.log(params.id)
    let result = await axios.get(`https://anu-backend.onrender.com/updatesaree/${params.id}`)
    console.log(result.data);
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
        let result= await axios.put(`https://anu-backend.onrender.com/updatesaree/${params.id}`,{
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
  return (
        <>
        <NavBar />
        <div className='updatediv'>
          <h1 style={{textAlign:"center",color:"#ffff"}}>Update The field value you want to update</h1>
            <form className="formsaree">
              <div>
                <input type="text" value={type} placeholder='Enter type of saree' className='inputfield' onChange={(e)=>setType(e.target.value)}/><br></br>
                <input type="text" value={company} placeholder='Enter Company Name'className='inputfield'onChange={(e)=>setCompany(e.target.value)}/><br></br>
                <input type="text" value={price} placeholder='Enter Price'className='inputfield' onChange={(e)=>setPrice(e.target.value)}/><br></br>
                <input type="text" value={available} placeholder='Available'className='inputfield' onChange={(e)=>setAvailable(e.target.value)}/><br></br>
                <input type="text" value={image} placeholder='Saree drive link'className='inputfield' onChange={(e)=>setImage(e.target.value)}/><br></br>
                <button type="submit" id="buttons" onClick={updatedata}>Update</button>
                </div>
            </form>
        </div>
        </>
  )
}

export default UpdateSaree