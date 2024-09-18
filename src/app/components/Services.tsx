import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Refs for the container and text elements
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const containerElement = containerRef.current;
    const texts = textRefs.current;

    if (containerElement && texts.length) {
      // Create a timeline for the parallax effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerElement,
          start: "top center", // Start when the container is at the top of the viewport
          end: "bottom top", // End when the container is at the bottom of the viewport
          scrub: 1, // Smooth scrolling effect
        },
      });

      // Parallax effect: Move each text at different speeds
      texts.forEach((text, index) => {
        tl.fromTo(
          text,
          {
            y: index * 50, // Initial position
            opacity: 0.3, // Start with shadowy effect
          },
          {
            y: 0, // Final position
            opacity: 1, // Lighten the text in the center
            duration: 1,
            ease: "power1.out",
          },
          0 // Add all animations to the timeline simultaneously
        );
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="lg:px-12 px-2 bg-black  relative py-32 flex items-center justify-center text-8xl font-bold text-center"
    >
      <div className="flex flex-col gap-2">
        {[
          "ANALYTIC",
          "OPTIMIZATION",
          "BRANDING",
          "ADVERTISING",
          "STRATEGY",
          "DESIGN",
          "SOCIAL",
          "SMM",
        ].map((text, index) => (
          <h1
            key={text}
            ref={(el) => (textRefs.current[index] = el!)}
            className="shadow-lg text-white text-3xl lg:text-8xl" // Optional: Add a CSS shadow for additional effect
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Services;
