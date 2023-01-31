import React from "react";
import { NavLink,useNavigate} from "react-router-dom";
import anu from "../Images/anulogo.png"
import css from "../Style.css";
function Header() {
  const admin = localStorage.getItem("email");  
  const navigate = useNavigate();
  const logotdevice=()=>{
    localStorage.clear();
    navigate("/login")
  }
  return (
    <div className="NavOuterBox">
      
        <div className="logoBox">
          <img id="anulogo" src={anu} alt="error" />
          <span id="StoreName"> Anu Sare/Suit Store</span>
        </div>
      <div className="linkTab">
        {
          admin?
        <ul className="link">
          <li><NavLink to="/">Saree</NavLink></li>
          <li><NavLink to="/suit">Suit</NavLink></li>
          <li><NavLink to="/AddSaree">Add Sare</NavLink></li>
          <li><NavLink to="/AddSuit">Add Suit</NavLink></li>
          <li><NavLink onClick={logotdevice} to="/login">logout</NavLink></li>
        </ul>
        :
        <ul className="link">
          <li><NavLink to="/">Saree</NavLink></li>
          <li><NavLink to="/suit">Suit</NavLink></li>
          <li><NavLink onClick={logotdevice} to="/login">logout</NavLink></li>
        </ul>

      }
      </div>
    </div>
  );
}

export default Header;
