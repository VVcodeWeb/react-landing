import React from "react"
import "./Contact.scss"

const Contact = (props) => {
    return(
        <div className="contact">
            {props.children}
            <div className="phone">
                <i className="icon light_blue_color icon-call-out">
                    <p>{props.phone}</p>
                </i>
                
            </div>
            <div className="email">
                <i className="icon light_blue_color icon-envelope">
                    <p>{props.email}</p>
                </i>
                
            </div>
        </div>
    )
}



export default Contact 