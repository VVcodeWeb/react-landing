import React from "react"
import "./Advantage.scss"

  const Advantage = (props) => {
      return(   
        <div className="advantage" onClick={() => props.onClickHandler(props.index)}>
                <div className={`advantage_wrapper p-4 ${props.open? "open_advantage": "close_advantage"}`}>
                    {props.children}
                </div>
       
            </div>
            
      )
  }


  export default Advantage