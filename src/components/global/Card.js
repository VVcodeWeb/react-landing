import React from "react"

import "./Card.scss"

class Card extends React.Component{

    render() {
        return(
            <div className={this.props.styles? `${this.props.styles} card_wrapper`: "card_wrapper"}> 
                <div className="card">
                    <div className="icon_wrapper">
                        <i className={ `${this.props.icon} icon`}/>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card