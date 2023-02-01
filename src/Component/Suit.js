import React ,{useState,useEffect}from 'react'
import axios from "axios";
import ItemCardSuit from './ItemCardSuit';
import Header from './NavBar'
import Crosel from "./Crosel"
import Saree from "./Saree"
import Fotter from "./Footer"
function Suit() {
  const[data,setData] = useState([]);

  useEffect(() => {
    getItems();
  }, [])

  const getItems=async()=>{
    try{
    let result = await axios.get("http://localhost:5000/suit");
    setData(result.data);
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <div>
      <Header />
      <Crosel />
      <div style={{background:"#FFF6E4",marginTop:"-1%"}}>
      <h1 id="ourProduct">Our Products</h1>
      <div className ="Sareediv">
        {
          data.map((data)=>{
           return (<ItemCardSuit data={data}/>)
           
          })
        }
      
      </div>
    
    </div>
      <Fotter />
    </div>
  )
}

export default Suit