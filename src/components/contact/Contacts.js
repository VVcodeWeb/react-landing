import React from "react"
import Contact from "./Contact"
import TitleAndText from "../global/TitleAndText"
import "./Contacts.scss"

const Contacts = () => {
    return(
        <section className="contacts">
            <div className="contacts_container">
                <Contact phone="to be done find icon" email="oneonlyone@gmail.com">
                    <TitleAndText title="New York" span="head office" text="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quis aliquam. Neque, non quas.
                    "/>
                </Contact>
                <Contact phone="to be done find icon" email="oneonlyone@gmail.com">
                    <TitleAndText title="London" span="Operation" text="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quis aliquam. Neque, non quas.
                    "/>
                </Contact>
                <Contact phone="to be done find icon" email="oneonlyone@gmail.com">
                    <TitleAndText title="Singapore" span="Finance" text="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quis aliquam. Neque, non quas.
                    "/>
                </Contact>
            </div>
        </section>    
    )
}

export default Contacts