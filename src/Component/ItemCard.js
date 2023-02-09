import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
function ItemCard(props) {
  console.log(props.data._id);
  let s1 = props.data.image;
  let s = "https://drive.google.com/uc?export=view&id=";
  let b = localStorage.getItem("email")
  s=s+s1;
  const deleteItem= async(id)=>{
    const result = await axios.delete(`https://anu-backend.onrender.com/saree/${id}`)
    console.log(result);
    if(result){
      alert("record Deleted");
    }
    else{
      console.log("no record");
    }
  }
  return (
    <div className="cardouterbox">
      <div className="cardinnerouterbox">
        <img id="sareeimagecard" src={s} alt="error" />
        <div className="Descriptionsarediv">
          <div className="TextdivPara">
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside1">Type:</p>
              <p id="parasection">{props.data.type}</p>
            </p>
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside">Company:</p>
              <p id="parasection">{props.data.company}</p>
            </p>
          </div>
          <div className="TextdivPara1">
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside1">Price:</p>
              <p id="parasection">{props.data.price}/-</p>
            </p>
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside">Available:</p>
              <p id="parasection">{props.data.available}</p>
            </p>
          </div>

          {
            b?
          <div className="updatedeletediv">
            <Link to={"/updatesaree/"+props.data._id}><p id="updatepara">Update</p></Link>
           <div onClick={(e)=>deleteItem(props.data._id,e)}><p id="deletepara" >Delete</p></div>
          </div>:""
            
          }       
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
