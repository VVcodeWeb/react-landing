import React, { useState, useEffect } from 'react';
import logo_dark from "../../assets/logo-dark.png"
import  './Header.scss';
import { Link } from "react-scroll"
import logo_light from "../../assets/logo.png"

const Header = () =>  {
    const [headerStyle, setHeaderStyle] = useState(false)
    const [openMenu, setOpenu] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position >= 10){
            setHeaderStyle(true)
        } else {
            setHeaderStyle(false)
        }
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    function click(){
        if(window.innerWidth <= 1199){
            setOpenu(!openMenu)
        }
    }
    return(
        <div className={`header ${headerStyle? "white_theme": "transparent_theme"}`}>
            <div className={`header_container ${openMenu? "header_container_open": "header_container_closed"}`}>
                <nav className="navbar">
                    <div className="drop_menu_container">
                        <img src={`${headerStyle? logo_dark: logo_light}`} alt="logo_dark"/>
                        <button type="button" onClick={click} className="drop_menu">
                            <span className="toggle_icon"></span>
                        </button>
                    </div>

                    <div className="navbar_collapse">
                        <div className="navbar_collapse_container">
                            <ul className="links">
                                <li className="link open-link"><Link activeClass="active" onClick={click} spy={true} smooth={true} duration={500} to="intro_carousel">Home</Link></li>
                                <li className="link open-link"><Link activeClass="active" onClick={click} spy={true} smooth={true} duration={500} to="about_container">About</Link></li>
                                <li className="link open-link"><Link activeClass="active" onClick={click} spy={true} smooth={true} duration={500} to="products" offset={-150}>Product</Link></li>
                                <li className="link open-link"><Link activeClass="active" onClick={click} spy={true} smooth={true} duration={500} to="pricing">Pricing</Link></li>
                                <li className="link open-link"><Link activeClass="active" onClick={click} spy={true} smooth={true} duration={500} to="work" offset={-100}>Work</Link></li>
                                <li className="link open-link"><Link activeClass="active" onClick={click} spy={true} smooth={true} duration={500} to="services"offset={-80}>Service</Link></li>
                                <li className="link open-link"><Link activeClass="active" onClick={click} spy={true} smooth={true} duration={500} to="contacts" offset={-150}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav> 
            </div>
            
        </div>
    )
}


export default Header