import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import saree from "../Images/saree.png"
import saree2 from "../Images/saree3.webp"
import saree3 from "../Images/s2.jpg"
import saree1 from "../Images/saree4.jpg"
import saree4 from "../Images/s10.jpg"
import saree5 from "../Images/s11.jpg"
import saree6 from "../Images/s12.jpg"
import saree7 from "../Images/s13.jpg"
import saree8 from "../Images/s14.jpg"
import css from "../Style.css"

function Crosel() {
  return (
    <div className='croselBox'>
        <Carousel showThumbs={false} showArrows={true}>
            
            <div style={{display:"flex"}}>
                <img id="crosolimage" src={saree} alt="err"/>
                <img id="crosolimage" src={saree3} alt="err"/>
                <img id="crosolimage" src={saree1} alt="err"/>
            </div>

            <div style={{display:"flex"}}>
                <img id="crosolimage" src={saree4} alt="err"/>
                <img id="crosolimage" src={saree2} alt="err"/>
                <img id="crosolimage" src={saree5} alt="err"/>
            </div>

            <div style={{display:"flex"}}>
                <img id="crosolimage" src={saree6} alt="err"/>
                <img id="crosolimage" src={saree7} alt="err"/>
                <img id="crosolimage" src={saree8} alt="err"/>
            </div>
      
       
        </Carousel>
    </div>
  )
}

export default Crosel