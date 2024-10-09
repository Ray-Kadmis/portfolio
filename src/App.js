import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import useScrollAnimation from "./Animate.js";

import project from "./project1.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiExpress,
  SiFigma,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiSvelte,
  SiSass,
  SiFlutter,
  SiCplusplus,
  SiCsharp,
} from "react-icons/si";

import "./index.css";
import MouseTracker from "./useParallax.js";
import AboutSection from "./About.js";
import ContactForm from "./Contact.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import Navbar from "./navbar.js"
import { useRef } from "react";
function App() {
  let text1 =
    "A job portal website made using vanilla JS, Html, CSS and Firebase. The purpose of the website is to collect CV of job seekers and available jobs from recruiters and connect the both according to the recruiter's requirements and available candidate for the job";
  const addElement = useScrollAnimation();
  
  
  return (
    <div className="body">
  
      <Navbar/>
      <div className="section" id="home">
      <MouseTracker />
      </div>
      <div className="section" id="about">
      <AboutSection />
      </div>
      <h1
        className="hidden text-center skillsText  "
        data-animation="show"
        ref={addElement}
        id="skills"
      >
    My Skillset
      </h1>
      <div className="row  justify-content-center skillSet">
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12  hidden"
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaHtml5} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaJsSquare} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiTypescript} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiCplusplus} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiCsharp} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaPython} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaReact} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiSvelte} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiFlutter} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaNodeJs} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiExpress} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaBootstrap} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiSass} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaCss3Alt} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiFirebase} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiMongodb} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiMysql} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiSqlite} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiFigma} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaGithub} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaGit} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaNpm} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiAdobephotoshop} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiAdobelightroom} iconClass="icon" />
        </div>
      </div>
      <div
        className="projects row hidden  "
        data-animation="show"
        ref={addElement}
      >
        <h1 id="portfolio" className="proHeading text-center">Portfolio</h1>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
          <a href="https://www.sub-it.net/" className="tags"><Card imageSrc={project} description={text1} newClass="proCard1" /></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <a href="https://www.sub-it.net/" className="tags"><Card imageSrc={project} description={text1} newClass="proCard1" /></a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <a href="https://www.sub-it.net/" className="tags"><Card imageSrc={project} description={text1} newClass="proCard1" /></a>
        </div>
      </div>
      <div className="row Contact">
        <div
          className="col-lg-6 col-md-12 col-sm-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <h1 id="contact" className="contactText">
            Get In Touch, And Let's Create Something Amazing Together!
          </h1>
          <h4 className="contactText2">
            Thank you for visiting my portfolio! If you're looking for top-notch
            website design, development, or optimization services, you're in the
            right place. I specialize in creating stunning, user-friendly
            websites tailored to your unique needs and goals. Whether you have a
            specific vision in mind or need guidance to bring your ideas to
            life, I'm here to help. Please don't hesitate to reach out—I’m
            excited to collaborate with you and turn your digital dreams into
            reality.
          </h4>
          <h6 className="contactText3">
            Are you a recruiter? <a href="RehanCV.pdf" download="RehanCV.pdf"><button>Download CV</button></a>
          </h6>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
