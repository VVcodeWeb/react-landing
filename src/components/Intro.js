import React from 'react';
import "./Intro.scss"
import img_1 from "../assets/intro_image_1.jpg"
import img_2 from "../assets/intro_image_2.jpg"

function Intro (){
    return(
        <div className="carousel_container">
            <div className="carousel_slide">
                <div className="image_1">
                    <img src={img_1} className="first_image" width="100%" height="600px" alt="img1"/>
                    
            </div>
            </div>
        </div>
        
    )
}



export default Intro;