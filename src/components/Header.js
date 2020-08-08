import React, { useState } from 'react';
import logo_dark from "../assets/logo-dark.png"
import  './Header.scss';


function Header() {
    const [openMenu, setOpenu] = useState(false)
    function click(){
        setOpenu(!openMenu)
    }
    
    return(
        <div className="header">
            <div className={openMenu?"header_container open":"header_container"}>
                <nav className="navbar">
                    <div className="drop_menu_container">
                        <img src={logo_dark} alt="logo_dark"/>
                        <button type="button" onClick={() => click()} className="drop_menu">
                            <span className="toggle_icon"></span>
                        </button>
                    </div>

                    <div className="navbar_collapse">
                        <div className="navbar_collapse_container">
                            <ul className="links">
                                <li className={openMenu?"link open-link": "link"}><a href="#">Home</a></li>
                                <li className={openMenu?"link open-link": "link"}><a href="#">About</a></li>
                                <li className={openMenu?"link open-link": "link"}><a href="#">Product</a></li>
                                <li className={openMenu?"link open-link": "link"}><a href="#">Pricing</a></li>
                                <li className={openMenu?"link open-link": "link"}><a href="#">Work</a></li>
                                <li className={openMenu?"link open-link": "link"}><a href="#">Service</a></li>
                                <li className={openMenu?"link open-link": "link"}><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav> 
            </div>
            
        </div>
    )
}


export default Header