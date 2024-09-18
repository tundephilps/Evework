"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Background from "../images/Frame 149.png";
import HomePage from "./../pages/homepage"; // We'll create this component next

const Intro = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    gsap.to(circleRef.current, {
      scale: 50,
      duration: 9,
      ease: "power2.inOut",
    });

    let percentage = 0;
    const interval = setInterval(() => {
      if (percentage >= 100) {
        clearInterval(interval);
        setLoadingComplete(true);
      } else {
        percentage++;
        setLoadingPercentage(percentage);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          setShowHomePage(true);
        },
      });

      gsap.to(textRef.current, {
        x: "random(-20, 20)",
        yoyo: true,
        repeat: 3,
        duration: 0.2,
        ease: "sine.inOut",
      });
    }
  }, [loadingComplete]);

  if (showHomePage) {
    return <HomePage />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center ">
      <Image
        src={Background}
        className="z-0"
        alt=""
        layout="fill"
        objectFit="cover"
      />

      <div
        ref={circleRef}
        className="absolute w-32 h-32 bg-[#fb4e02] rounded-full z-10"
        style={{
          clipPath: "circle(50% at center)",
          transform: "scale(1)",
          transformOrigin: "center",
        }}
      ></div>

      <div
        ref={textRef}
        className="absolute font-bold text-[#fcfcfc] text-center z-20"
      >
        <p className="text-[120px]" style={{ lineHeight: "120px" }}>
          LOADING
        </p>
        <p className="text-[200px]" style={{ lineHeight: "200px" }}>
          {loadingPercentage}%
        </p>
      </div>
    </div>
  );
};

export default Intro;
