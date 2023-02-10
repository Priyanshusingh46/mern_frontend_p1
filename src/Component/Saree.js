import React ,{useEffect, useState}from 'react'
import ItemCard from './ItemCard'
import css from "../Style.css";
import axios from "axios"
const Saree=()=>{
  const[data,setData] = useState(null);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("https://anu-backend.onrender.com/saree");
    setData(result.data);
    console.log(data);
    }
    catch(e){
      console.log(e);
    }
  }
  
  return (
    <div className='sareeouterdiv'>
    <h1 id="ourProduct">Our Products</h1>
      <div className ="Sareediv">
        {
          data && data.map((data)=>{
            console.log("map",data.price);
           return (<ItemCard data={data}/>)
           
          })
        }
      
      </div>
    
    </div>
  )
}

export default Saree