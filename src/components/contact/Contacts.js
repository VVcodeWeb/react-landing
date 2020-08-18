import React from "react";
import Contact from "./Contact";
import TitleAndText from "../global/TitleAndText";
import "./Contacts.scss";
import GMap from "./GoogleMap";
const Contacts = () => {
  return (
    <section className="contacts mb-5">
      <div className="contacts_container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Contact phone="+49-160-555-8251" email="oneonlyone818@gmail.com">
            <TitleAndText
                title="New York"
                span="head office"
                text="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quis aliquam. Neque, non quas.
                        "
            />
            </Contact>
          </div>
          <div className="col-md-4">
            <Contact phone="+49-178-555-9681" email="oneonlyone818@gmail.com">
            <TitleAndText
                title="London"
                span="Operation"
                text="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quis aliquam. Neque, non quas.
                        "
            />
            </Contact>
          </div>
          <div className="col-md-4">
            <Contact phone="+49-160-555-5457" email="oneonlyone818@gmail.com">
            <TitleAndText
                title="Singapore"
                span="Finance"
                text="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam quis aliquam. Neque, non quas.
                        "
            />
            </Contact>
          </div>
        </div>
        
        
        
      </div>
      <GMap></GMap>
    </section>
  );
};

export default Contacts;
