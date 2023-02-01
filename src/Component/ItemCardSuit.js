import axios from "axios";
import React from "react";
function ItemCardSuit(props) {
  console.log(props.data._id);
  let s1 = props.data.image;
  let s = "https://drive.google.com/uc?export=view&id=";
  let b = localStorage.getItem("email")
  s=s+s1;
  const deleteItem= async(id)=>{
    const result = await axios.delete(`http://localhost:5000/suit/${id}`)
    console.log(result);
    if(result){
      alert("record Deleted");
    }
    else{
      console.log("no record");
    }
  }
  return (
    <div>
      <div>
        <img id="sareeimagecard" src={s} alt="error" />
        <div className="Descriptionsarediv">
          <div className="TextdivPara">
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside1">Type:</p>
              <p style={{ fontSize: "20px" }}>{props.data.type}</p>
            </p>
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside">Company:</p>
              <p style={{ fontSize: "20px" }}>{props.data.company}</p>
            </p>
          </div>
          <div className="TextdivPara1">
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside1">Price:</p>
              <p style={{ fontSize: "20px" }}>{props.data.price}/-</p>
            </p>
            <p style={{ display: "flex" }}>
              <p id="descriptionrightside">Available:</p>
              <p style={{ fontSize: "20px" }}>{props.data.available}</p>
            </p>
          </div>

          {
            b?
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div><p style={{fontSize:"20px",fontWeight:"bold"}}>Update</p></div>
           <div onClick={(e)=>deleteItem(props.data._id,e)}><p style={{fontSize:"20px",color:"red",fontWeight:"bold"}} >Delete</p></div>
          </div>:""
            
          }       
        </div>
      </div>
    </div>
  );
}

export default ItemCardSuit;
