import React from 'react';
import "./Intro.scss"
import img_1 from "../../assets/intro_image_1.jpg"
import img_2 from "../../assets/intro_image_2.jpg"


function Intro (){
    return(
        <div id="intro_carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#intro_carousel" data-slide-to="0" className="active"></li>
                <li data-target="#intro_carousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner" style={{height: "100vh"}} >
                <div className="carousel-item active h-100">
                    <img className="d-block w-100 h-100" src={img_1} style={{
                        objectFit: "cover",
                        objectPosition: "60% 10%",
                    }}alt="First slide"/>
                </div>
                <div className="carousel-item h-100">
                    <img className="d-block w-100 h-100" src={img_2} style={{
                        objectFit: "cover",
                        objectPosition: "50% 0",
                    }}alt="Second slide"/>
                </div>
                <div className="text_over_img">
                        <h1 className="text-uppercase font-weight-bold" >Hi-tech <br/>design</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae nemo, mollitia in placeat sequi!</p>
                        <div className="mt-5">
                            <a className="intro_button font-weight-bold text-uppercase py-3 px-5" href="/">explore</a>
                        </div>
                </div>
            </div> 
       </div>  
    )
}



export default Intro;