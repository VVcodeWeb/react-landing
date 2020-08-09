import React from "react"

const Product = (props) =>{
    return(
        <div className="product">
            {props.children}
            <div className="read_more_wrapper">
                <a href="/"><span className="read_more">read more</span></a>
            </div>
            {props.img? <img src={props.img} alt="img2"/> : ""}
        </div>
    )
}

export default Product