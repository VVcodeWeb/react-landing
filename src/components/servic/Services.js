import React from "react"
import TitleAndText from "../global/TitleAndText"
import Card from "../global/Card"
import icon from "../../assets/gmap-pin.png"
import "./Services.scss"


const Services = () => {
    return(
        <section className="services">
            <div className="title_services">
                <TitleAndText title="Services" text="TheExpected an assignment or function call and instead saw an expression 
                    JSHint or ESLint encounters an expression with " />
            </div>
            <div className="cards_wrapper">
                <Card icon={icon}>
                    <TitleAndText title="Art Of Coding" text="Ti orci, a semper lorem. Ut at dui ut lectus egestase" /> 
                </Card>   
                <Card icon={icon}>
                    <TitleAndText title="Responsive Design" text="Cras sed pulvinar orci, a semper lorem. Ut at dui ut lectus egestase" /> 
                </Card>
                <Card icon={icon}>
                    <TitleAndText title="Feature Reach" text="Cras sed pulvinar orci, a semper lorem. Ut at dui ut lectus egestase" /> 
                </Card>
                <Card icon={icon}>
                    <TitleAndText title="Useful Documentation" text="Cras sed pulvinar orci, a semper lorem. Ut at dui ut lectus egestase" /> 
                </Card>
                <Card icon={icon}>
                    <TitleAndText title="Fast delivery" text="Atae lobortis. Cras sed pulvinar orci, a semper lorem. Ut at dui ut lectus egestase" /> 
                </Card>
                <Card icon={icon}>
                    <TitleAndText title="Free plugins" text="Sus vitae lobortis. Cras sed pulvinar orci, a semper lorem. Ut at dui ut lectus egestase" /> 
                </Card>
            </div>
        </section>
    )
}

export default Services