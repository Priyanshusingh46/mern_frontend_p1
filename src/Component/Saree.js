import React ,{useEffect, useState}from 'react'
import ItemCard from './ItemCard'
import css from "../Style.css";
import axios from "axios"
const Saree=()=>{
  const[data,setData] = useState([]);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("http://localhost:5000/saree");
    setData(result.data);
    }
    catch(e){
      console.log(e);
    }
  }
  
  return (
    <div style={{background:"#FFF6E4",marginTop:"-1%"}}>
    <h1 id="ourProduct">Our Products</h1>
      <div className ="Sareediv">
        {
          data.size>0?
          data.map((data)=>{
           return (<ItemCard data={data}/>)
           
          })
          :""
        }
      
      </div>
    
    </div>
  )
}

export default Saree