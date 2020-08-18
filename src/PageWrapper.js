import React from 'react'
import "./PageWrapper.scss"
import {Link } from "react-scroll"
import { useState, useEffect } from "react"

const PageWrapper = (props) => {
    const [topButtonPresence, setTopButtonPresence] = useState(false)
    useEffect(() => {
        window.onscroll = function(){
            if(window.pageYOffset >= 500){
                setTopButtonPresence(true)
                
            } else {
                setTopButtonPresence(false)
            }
        }
    }, [])
    return (
        <div className="website_wrapepr">
            {props.children}
            <div className={`top_button_container ${topButtonPresence? "topButtonOn": "topButtonOff"}`}>
                <Link activeClass="active" className={`p-2 text-uppercase topButton `} spy={true} smooth={true} duration={500} to="intro_carousel">top</Link>
            </div>
        </div>
    )
}

export default PageWrapper
