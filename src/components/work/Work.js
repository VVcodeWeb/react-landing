import React from "react"
import {useState} from "react"
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
    const [showInfo, setShowInfo] = useState(false)

    const clickOnImage = () => {
        setShowInfo(!showInfo)
    }
    return(
        <section className="work">
            <div className="containerwork w-96">
                <TitleAndText title="Work" text="Donec ac nibh semper, imperdiet tellus et, tempus ipsum. Nam leo leo, volutpat vitae pretium quis, molestie sed ante. Suspendisse at turpis erat. 
                Etiam ullamcorper hendrerit lacus, sed pretium tellus viverra a." />
                <div className="images">
                    <div className="row">
                        {images.map((image, key) => {
                            return( 
                            <div onClick={clickOnImage} className="image_container col-md-6" key={key}>
                                <img  src={image} alt={image}/>
                            </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="glider_wrapper py-5 w-75 mx-auto">
                <GliderComponent  hasArrows={true} settings={{
                    slidesToShow: 3
                }}>
                    <div><img src={carousel_img_1} alt="1"/></div>
                    <div><img src={carousel_img_2} alt="2"/></div>
                    <div><img src={carousel_img_3} alt="3"/></div>
                    <div><img src={carousel_img_4} alt="4"/></div>
                    <div><img src={carousel_img_5} alt="5"/></div>
                    <div><img src={carousel_img_6} alt="6"/></div>
                </GliderComponent>
            </div>
            <div className={`information_about_work ${showInfo? "display_info": "hide_info"}`}>
                <div className="text_wrapper m-5">
                    <div className="titelAndClose">
                        <h2>Art Of Coding</h2>
                        <button onClick={clickOnImage} className="hide_button">Hide</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente, minus eius consequuntur ex aliquam esse asperiores, omnis sint vero suscipit placeat reprehenderit provident odit corrupti minima debitis nihil excepturi deserunt culpa natus adipisci sit beatae est! 
                        Dolorum tenetur temporibus accusamus necessitatibus provident? Libero delectus ab 
                        repudiandae et similique itaque.</p>
                    <hr/>
                </div>
                <div className="autors m-5 pt-5">
                    <p><span className="role">developer</span>: V.V</p>
                    <p><span className="role">designer</span>: Alisa Keys</p>
                </div>
            </div>
            
        </section>
    )
}

export default Work