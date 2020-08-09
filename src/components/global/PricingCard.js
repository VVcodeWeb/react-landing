import React from "react"
import Card from "./Card"
import "./PricingCard.scss"

class PricingCard extends Card{
    render(){
        return(
            <div className="pricing_card_container">
                <div className="pricing_card">
                    {this.props.children}
                    <ul className="list">
                        {this.props.features.map((feature, i) => {
                            return <li key={i} className="list_item">{feature}</li>   
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
}

export default PricingCard