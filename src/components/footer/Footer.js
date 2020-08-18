import React from "react"
import logo from "../../assets/logo-dark.png"
import "./Footer.scss"

const Footer = () => {
    return(
        <section className="footer">
            <div className="links_wrapper w-96">
            <div className="links row">
                <ul className="footer_links col-md-4">
                    <li className="footer_link">Home</li>
                    <li className="footer_link">About</li>
                    <li className="footer_link">Work</li>
                    <li className="footer_link">Contact</li>
                </ul>
                <ul className="footer_links col-md-4">
                    <li className="footer_link">Facebook</li>
                    <li className="footer_link">Twitter</li>
                    <li className="footer_link">Instagram</li>
                    <li className="footer_link">YouTube</li>
                </ul>
                <ul className="footer_links col-md-4">
                    <li className="footer_link">Subscribe</li>
                    <li className="footer_link">Privacy Policy</li>
                    <li className="footer_link"> Terms & Condtions</li>
                </ul>
            </div>
            </div>
            <div className="footer_wrapper">
                <div className="footer_bottom">
                    <img className="footer_bottom_logo" src={logo} alt="logo"/>
                    <p className="footer_bottom_text">
                        <span>Altonepage</span> Theme <br/> Powered by: <br/>
                        <span>KeenThemes.com</span>
                    </p>
                </div>
            </div> 
        </section>
    )
}

export default Footer