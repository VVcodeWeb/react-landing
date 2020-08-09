import React from "react"
import "./Card.scss"

const Card = (props) => {
    return(
        <div className="card_wrapper">
            <div className="card">
                <i className="icon">
                <img src={props.icon} alt="icon"/>
                </i>
                {props.children}
                <ul className="list">
                    {props.features.map((feature) => {
                        return <li className="list_item">{feature}</li>   
                    })
                }        
                </ul>
                <div className="button_wrapper">
                    <a className="choose_button" href="/">choose</a>
                </div>
            </div>
        </div>
        
    )

}

export default Card