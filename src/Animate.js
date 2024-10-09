// useScrollAnimation.js

import { useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;
          entry.target.classList.remove('hidden');
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    });

    elementsRef.current.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const addElement = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addElement;
};

export default useScrollAnimation;
