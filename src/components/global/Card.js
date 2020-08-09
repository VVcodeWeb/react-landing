import React from "react"



class Card extends React.Component{
    render() {
        return(
            <div className="card_wrapper">
                <div className="card">
                    <i className="icon">
                    <img src={this.props.icon} alt="icon"/>
                    </i>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card