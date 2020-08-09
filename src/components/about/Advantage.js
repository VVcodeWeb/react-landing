import React from "react"
import "./Advantage.scss"

  const Advantage = (props) => {
      return(   
        <div className="advantage">
                <div className="advantage_wrapper">
                    {props.children}
                </div>
       
            </div>
            
      )
  }


  export default Advantage