import React from "react";
import "./About.scss";
import img_1 from "../assets/about_1.jpg";
import img_2 from "../assets/about_2.jpg";
import img_3 from "../assets/about_3.jpg";

function About() {
  return (
    <div className="about_container">
      <div className="container">
        <div className="art_coding">
          <div className="text_container">
            <h2>Art of Coding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corrupti, vel!
            </p>
          </div>
          <div className="img_container">
            <img src={img_1} alt="one" />
            <img src={img_2} alt="two" />
          </div>
          <div className="clean_design">
            <h2>Clean Design</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
              neque.
            </p>
          </div>
        </div>
        <div className="amazing_support">
          <div className="text_container">
            <h2>Amazing Support</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, minima.
            </p>
          </div>
          <div className="img_container">
            <img src={img_3} alt="three" />
          </div>
        </div>
      </div>

      <div className="why_us">
        <div className="why_us_container">
          <div className="text_container">
            <h2>Why Choose us?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              corporis sequi explicabo numquam expedita a nemo iste quis vitae
              aspernatur?
            </p>
          </div>
          <div className="expore_button_container">
            <a class="explore_button" href="/">
              explore
            </a>
          </div>
        </div>
          <div className="advantages_container">
            <div className="advantage_1"></div>
            <div className="advantage_2"></div>
            <div className="advantage_2"></div>
          </div>
        
      </div>
    </div>
  );
}

export default About;
