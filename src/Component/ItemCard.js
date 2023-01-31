import React from "react";
function ItemCard(props) {
  /*{type,company,price,available,image} */
  console.log(props);
  return (
    <div>
      <div>
        <img id="sareeimagecard" src={props.data.image} alt="error" />
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
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
