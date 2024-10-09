import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import portrait from "./me.jpg";
import useScrollAnimation from "./Animate.js";
import "./index.css";
function AboutSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "UI/UX Designer",
        "Photographer",
        "Videographer",
        "AI Artist",
        "Content Writer",
        "Pookie (✿◡‿◡)",
      ],
      typeSpeed: 50,
      startDelay: 20,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    // Cleanup the Typed instance on component unmount
  });
  const addElement = useScrollAnimation();
  return (
    <div className=" hidden  " data-animation="show" ref={addElement}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 textCon">
          <h1 className="aboutText1">
            I'm Rehan Your Favourite <br />
            <span ref={el} />
          </h1>
          <h4 className="aboutText2">
            Welcome to my portfolio! With over 5 years of experience in web
            development, I specialize in creating stunning designs and seamless
            user experiences. I've served 200+ satisfied clients, making website
            development stress-free.
            <br />
            Whether it's designing, developing, or publishing, I've got you
            covered. From sleek modern interfaces to dynamic websites, I can
            turn your vision into reality. Explore my portfolio to see how I can
            bring your ideas to life!
          </h4>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 imgDiv">
          <img className="meImg img-fluid" src={portrait} alt="Portrait" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
