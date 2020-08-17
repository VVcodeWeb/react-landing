import React from "react"
import TitleAndText from "../global/TitleAndText"
import "./Work.scss"
import img_1 from "../../assets/work_1.jpg"
import img_2 from "../../assets/work_2.jpg"
import img_3 from "../../assets/work_3.jpg"
import img_4 from "../../assets/work_4.jpg"
import img_5 from "../../assets/work_5.jpg"
import GliderComponent from "react-glider-carousel"
import carousel_img_1 from "../../assets/carousel_1.png"
import carousel_img_2 from "../../assets/carousel_2.png"
import carousel_img_3 from "../../assets/carousel_3.png"
import carousel_img_4 from "../../assets/carousel_4.png"
import carousel_img_5 from "../../assets/carousel_5.png"
import carousel_img_6 from "../../assets/carousel_6.png"


const Work = () => {
    const images = [img_2, img_1, img_3, img_4, img_5]
    
    return(
        
        <section className="work">
            
            <div className="container">
                <TitleAndText title="Work" text="Donec ac nibh semper, imperdiet tellus et, tempus ipsum. Nam leo leo, volutpat vitae pretium quis, molestie sed ante. Suspendisse at turpis erat. 
                Etiam ullamcorper hendrerit lacus, sed pretium tellus viverra a." />
                <div className="images">
                    {images.map((image, key) => {
                        return( 
                        <div className="image_container" key={key}>
                            <img src={image} alt={image}/>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="glider_wrapper w-75 mx-auto">
                <GliderComponent>
                    <div><img src={carousel_img_1} alt="1"/></div>
                    <div><img src={carousel_img_2} alt="2"/></div>
                    <div><img src={carousel_img_3} alt="3"/></div>
                    <div><img src={carousel_img_4} alt="4"/></div>
                    <div><img src={carousel_img_5} alt="5"/></div>
                    <div><img src={carousel_img_6} alt="6"/></div>
                </GliderComponent>
            </div>
            
            
        </section>
    )
}

export default Work