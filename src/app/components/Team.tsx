import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Face1 from "../images/Card1.png";
import Face2 from "../images/Card2.png";
import Face3 from "../images/Card3.png";
import Face4 from "../images/Card4.png";
import Face5 from "../images/Card5.png";
import Face6 from "../images/Card6.png";
import Face7 from "../images/Card7.png";

gsap.registerPlugin(ScrollTrigger);

const Team: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create the overlapping effect
    gsap.set(cardsRef.current, {
      yPercent: (index) => -10 * index!,
      zIndex: (index) => 7 - index!,
    });

    // Create the star formation on scroll
    gsap.to(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0], // Trigger the animation on scrolling this element into view
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
      x: (index) => {
        const angle = (index! * Math.PI * 2) / 7; // Angle for 7 points star
        return 300 * Math.cos(angle); // X-position
      },
      y: (index) => {
        const angle = (index! * Math.PI * 2) / 7;
        return 300 * Math.sin(angle); // Y-position
      },
      rotation: 360,
      duration: 2,
      stagger: 0.1,
    });
  }, []);

  const cardImages = [Face3, Face4, Face5, Face6, Face7, Face1, Face2];

  return (
    <div className="px-12 bg-black relative py-12 lg:block hidden text-8xl font-bold text-center">
      <h1 className="text-white">
        OUR <span className="text-[#FB4E02]">TEAM</span>
      </h1>
      <div className="" style={{ position: "relative", height: "150vh" }}>
        {cardImages.map((face, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card"
            style={{
              position: "absolute",
              width: "200px",
              height: "300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              overflow: "hidden",
              top: "50%",
              right: "45%",
            }}
          >
            <Image
              src={face}
              alt={`Card ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
