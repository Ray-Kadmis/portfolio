import React, { useState, useEffect } from "react";
import bg1 from "./bg1.png";
import bg3 from "./bg3.png";
import hero2 from "./hero3.png";
import hero3 from "./hero5.png";
import hero4 from "./hero6.png";
import hero5 from "./hero7.png";
import hero6 from "./hero8.png";
import hero8 from "./hero10.png";
import hero9 from "./hero11.png";
import hero10 from "./hero12.png";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const heroElement = document.querySelector(".hero");
      if (heroElement) {
        const { clientX, clientY } = event;
        const rect = heroElement.getBoundingClientRect();
        const centerX = rect.left - rect.width / 2;
        const centerY = rect.top - rect.height / 2;

        setMousePosition({
          x: clientX + centerX,
          y: clientY + centerY,
        });
      }
      console.log(MouseTracker);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxStyles = (depth) => {
    return {
      transform: `translate(${mousePosition.x * depth}px, ${
        mousePosition.y * depth
      }px)`,
    };
  };
  // useEffect(() => {
  //   const timeline = gsap.timeline();
  //   const parallaxElements = document.querySelectorAll(".parallax");

  //   Array.from(parallaxElements).filter(el => !el.classList.contains("text")).forEach((el) => {
  //     const distance = el.dataset.distance || 0;
  //     timeline.from(
  //       el,
  //       {
  //         bottom : `${el.offsetHeight - Number(distance)}px`,
  //         duration: 2.5,
  //       },
  //       "4"
  //     );
  //   });
  // }, []);
  return (
    <div className="hero">
      <img
        src={bg1}
        alt=""
        className="parallax bg1"
        style={parallaxStyles(0)}
      />
      <img
        src={bg3}
        alt=""
        className="parallax bg3"
        style={parallaxStyles(0.001)}
      />
      <img
        src={hero2}
        alt=""
        className="parallax hero2"
        style={parallaxStyles(0.03)}
      />
      <img
        src={hero3}
        alt=""
        className="parallax hero3"
        style={parallaxStyles(0.04)}
      />
      <img
        src={hero4}
        alt=""
        className="parallax hero4"
        style={parallaxStyles(0.05)}
      />
      <div className="textbox" style={parallaxStyles(0.0)}>
        <h1 className="textA1  parallax" style={parallaxStyles(0.0)}>
          Websites Can Be Beautiful
        </h1>
        <h2 className="textA2  parallax" style={parallaxStyles(0.0)}>
          & Lighting Fast.
        </h2>
       

      </div>
      <img
        src={hero5}
        alt=""
        className="parallax hero5"
        style={parallaxStyles(0.06)}
      />
      <img
        src={hero6}
        alt=""
        className="parallax hero6"
        style={parallaxStyles(0.07)}
      />
      <img
        src={hero8}
        alt=""
        className="parallax hero8"
        style={parallaxStyles(0.08)}
      />
      <img
        src={hero9}
        alt=""
        className="parallax hero9"
        style={parallaxStyles(0.09)}
      />
      <img
        src={hero10}
        alt=""
        className="parallax hero10"
        style={parallaxStyles(0.02)}
      />
    </div>
  );
};

export default MouseTracker;
