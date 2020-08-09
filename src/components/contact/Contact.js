import React from "react"
import "./Contact.scss"

const Contact = (props) => {
    return(
        <div className="contact">
            {props.children}
            <div className="phone">
                <p>{props.phone}</p>
            </div>
            <div className="email">
                <p>{props.email}</p>
            </div>
        </div>
    )
}



export default Contact 