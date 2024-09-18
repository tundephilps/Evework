"use client";
import React, { useEffect, useRef } from "react";

import Image from "next/image";
import Background from "../images/Frame 149.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Change = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    const circleElement = circleRef.current;

    if (textElement && circleElement) {
      // Animation for the orange circle
      gsap.fromTo(
        circleElement,
        {
          x: "50vw", // Start from right side of the screen
          y: "-20%",
          scale: 0.3, // Start small
        },
        {
          x: "90vw", // Move to center
          y: "-50%",
          scale: 15, // Grow to cover the screen
          scrollTrigger: {
            trigger: circleElement,
            start: "top center",
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
          duration: 1,
          ease: "power2.inOut",
        }
      );

      // Animation for the text movement and fade-out
      gsap.to(textElement, {
        x: "-100%", // Move the text to the right
        opacity: 0, // Fade out
        scrollTrigger: {
          trigger: textElement,
          start: "top center", // Start the animation when the top of the text reaches the center of the viewport
          end: "+=300", // End after scrolling 300px
          scrub: 1,
        },
        duration: 1,
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Orange Circle */}
        <div
          ref={circleRef}
          className="absolute top-1/2 left-0 w-10 h-10 bg-[#FB4E02] rounded-full"
          style={{ zIndex: 1 }} // Ensure the circle is behind the text
        ></div>

        {/* Text Container */}
        <div className="relative w-full h-screen flex items-center justify-center">
          <div className="bg-black h-screen w-full flex items-center justify-center text-center">
            <h1
              ref={textRef}
              className="text-white text-7xl font-bold relative z-10"
            >
              WE WILL CHANGE <br />
              <span className="text-[#FB4E02]"> YOUR VIEW </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#FB4E02] flex lg:flex-row flex-col lg:items-end items-start justify-between p-12 text-white">
        <div>
          <h1 className="text-4xl font-bold pb-4">LOCAL TIME:</h1>
          <p>Kyiv: 20:31</p>
          <p>Vilnius: 21:31</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold pb-4">HELLO@VIEW.COM</h1>
          <h1 className="text-4xl font-bold">+38 (073) 25 48 625</h1>
        </div>
      </div>
    </div>
  );
};

export default Change;
