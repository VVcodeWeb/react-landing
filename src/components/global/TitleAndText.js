import React from "react"
import "./TitleAndText.scss"

const TitleAndText =  (props)=> {
    return(
        <div className="text_container">
        <h2>{props.title} <span>{props.span}</span></h2>
        <p>{props.text}</p>
    </div>
    )
}
export default TitleAndText