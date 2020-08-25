import React, { useState} from "react";
import "./About.scss";
import img_1 from "../../assets/about_1.jpg";
import img_2 from "../../assets/about_2.jpg";
import img_3 from "../../assets/about_3.jpg";
import TitleAndText from "../global/TitleAndText"
import Advantage from "./Advantage"

function About() {
  const advantage_arr = [
    {
      title:"Exceptional Frontend Framework",
      text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, feugiat. Cras vehiculfeugiat. Cras vehicula purus non viv a purus non viv minima.",
      id: 0
    },
    {
      title: "Modern Design Trends",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum corporis sequi explicabo numquam expedita a nemo iste quis vitae aspernatur?",
      id: 1
    },
    {
      title: "Beatifully Crafted Code",
      text: "Sed id risus eget nunc vulputate feugiat. Cras vehicula purus non viverra sagittis",
      id: 2
    }
  ]
  const [advantageOpenStatus, setAdvantageOpenStatus] = useState([true, false, false])

  const toggleAdvantageOpen = (id) =>{
    setAdvantageOpenStatus(
      advantageOpenStatus.map((item, index) => {
        return index ===  id? item = !item : item = false
      }, () => {
        console.log("Done!")
      })
    )
  }

  return (
    <section className="about_container">
      <div className="wrapper_about w-96">
        <div className="containerabout">
          <div className="art_coding row">
            <div className="coding_container col-md-6 col-xl-4">
              <TitleAndText title="Art Of coding" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, neque!" />
              <div className="img_container">
                <img src={img_1} alt="one" />
              </div>
            </div>
            <div className="design_container col-md-6  col-xl-4">
              <div className="img_container">
                <img src={img_2} alt="two" />
              </div>
              <div className="clean_design">
                <TitleAndText title="Clean Design" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, neque!" />
              </div>
            </div>
            <div className="amazing_support col-md-6  col-xl-4 mr-0 ml-0">
              <TitleAndText title="Amazing Support" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, minima." />
              <div className="img_container">
                <img src={img_3} alt="three" />
              </div>
          </div>
          
          
          </div>
          
        </div>
        {/* */}
        <div className="why_us">
          <div className="why_us_wrapper row">
            <div className="col-sm-12 col-md-6 why_us_container">
            <TitleAndText title="Why Choose us?" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
                  corporis sequi explicabo numquam expedita a nemo iste quis vitae
                  aspernatur?" />

              <div className="expore_button_container">
                <a className="explore_button" href="/">
                  explore
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 advantages_container">
                {advantage_arr.map((advantage) => {
                  return(
                  <Advantage open={advantageOpenStatus[advantage.id]} onClickHandler={toggleAdvantageOpen} index={advantage.id}  key={advantage.id}>
                    <TitleAndText title={advantage.title} text={advantage.text} />
                  </Advantage>)
                })}
        
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}

export default About;
