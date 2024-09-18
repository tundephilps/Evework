import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Circles = () => {
  // Refs for each circle and their texts
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  const circle4Ref = useRef<HTMLDivElement>(null);
  const circle5Ref = useRef<HTMLDivElement>(null);

  const text1Refs = useRef<HTMLParagraphElement[]>([]);
  const text2Refs = useRef<HTMLParagraphElement[]>([]);
  const text3Refs = useRef<HTMLParagraphElement[]>([]);
  const text4Refs = useRef<HTMLParagraphElement[]>([]);
  const text5Refs = useRef<HTMLParagraphElement[]>([]);

  // Function to apply the GSAP hover animation
  const applyHoverAnimation = (
    circleRef: React.RefObject<HTMLDivElement>,
    textRefs: React.RefObject<HTMLParagraphElement[]>,
    hoverColor: string = "white" // Default to white
  ) => {
    const circleElement = circleRef.current;
    const [textElement, subTextElement] = textRefs.current;

    if (circleElement && textElement && subTextElement) {
      const hoverAnimation = gsap.timeline({ paused: true });

      // Animation to change background color with an inward effect
      hoverAnimation
        .to(circleElement, {
          backgroundColor: hoverColor, // Use the passed hover color
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          [textElement, subTextElement],
          {
            color: "black",
            duration: 0.2,
            ease: "power2.out",
          },
          "-=0.2" // Start this animation slightly before the previous one ends
        );

      // Event listeners for mouse enter and leave
      const handleMouseEnter = () => hoverAnimation.play();
      const handleMouseLeave = () => hoverAnimation.reverse();

      circleElement.addEventListener("mouseenter", handleMouseEnter);
      circleElement.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners
      return () => {
        circleElement.removeEventListener("mouseenter", handleMouseEnter);
        circleElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  };

  // Apply hover animations to each circle
  useEffect(() => {
    const cleanup1 = applyHoverAnimation(circle1Ref, text1Refs);
    const cleanup2 = applyHoverAnimation(circle2Ref, text2Refs);
    const cleanup3 = applyHoverAnimation(circle3Ref, text3Refs);
    const cleanup4 = applyHoverAnimation(circle4Ref, text4Refs);
    // Use 'orange' color for the last circle
    const cleanup5 = applyHoverAnimation(circle5Ref, text5Refs, "#FB4E02");

    // Cleanup event listeners on unmount
    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
      cleanup4 && cleanup4();
      cleanup5 && cleanup5();
    };
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block px-12 bg-black text-white relative py-32">
        <div
          ref={circle1Ref}
          className="border border-white space-y-4 rounded-full h-[200px] w-[200px] flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text1Refs.current[0] = el!)}
            className="font-extrabold text-4xl"
          >
            200
          </p>
          <p ref={(el) => (text1Refs.current[1] = el!)} className="text-sm">
            Clients we have
            <br /> worked with
          </p>
        </div>

        <div
          ref={circle2Ref}
          className="absolute right-[40%] top-[10%] border border-white space-y-4 rounded-full h-[300px] w-[300px] flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text2Refs.current[0] = el!)}
            className="font-extrabold text-5xl"
          >
            31
          </p>
          <p ref={(el) => (text2Refs.current[1] = el!)} className="text-sm">
            of team members from <br /> Ukraine and Lithuania
          </p>
        </div>

        <div
          ref={circle3Ref}
          className="border border-white space-y-4 mt-[5%] rounded-full h-[400px] w-[400px] flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text3Refs.current[0] = el!)}
            className="font-extrabold text-8xl"
          >
            220%
          </p>
          <p ref={(el) => (text3Refs.current[1] = el!)} className="text-sm">
            average percentage of
            <br /> sales increase
          </p>
        </div>

        <div
          ref={circle4Ref}
          className="absolute right-12 top-[30%] border border-white space-y-4 rounded-full h-[500px] w-[500px] flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text4Refs.current[0] = el!)}
            className="font-extrabold text-8xl"
          >
            2019
          </p>
          <p ref={(el) => (text4Refs.current[1] = el!)} className="text-sm">
            year the agency was
            <br /> founded
          </p>
        </div>

        <div
          ref={circle5Ref}
          className="border border-white space-y-4 mt-[5%] rounded-full h-[700px] w-[700px] flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text5Refs.current[0] = el!)}
            className="font-extrabold text-8xl"
          >
            START
          </p>
          <p ref={(el) => (text5Refs.current[1] = el!)} className="text-sm">
            lets start cooperation
            <br /> right now
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden  px-2 bg-black text-white relative py-12 flex flex-wrap items-center justify-center gap-8">
        <div
          ref={circle1Ref}
          className="border border-white space-y-4 rounded-full h-[200px] w-[200px] flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text3Refs.current[0] = el!)}
            className="font-extrabold text-4xl"
          >
            220%
          </p>
          <p ref={(el) => (text3Refs.current[1] = el!)} className="text-sm">
            average percentage of
            <br /> sales increase
          </p>
        </div>
        <div className="border border-white space-y-4 rounded-full h-[200px] w-[200px] flex flex-col text-center items-center justify-center">
          <p
            ref={(el) => (text2Refs.current[0] = el!)}
            className="font-extrabold text-4xl"
          >
            31
          </p>
          <p ref={(el) => (text2Refs.current[1] = el!)} className="text-sm">
            of team members from <br /> Ukraine and Lithuania
          </p>
        </div>
        <div
          ref={circle3Ref}
          className="border border-white space-y-4 rounded-full h-[200px] w-[200px] flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text3Refs.current[0] = el!)}
            className="font-extrabold text-4xl"
          >
            220%
          </p>
          <p ref={(el) => (text3Refs.current[1] = el!)} className="text-sm">
            average percentage of
            <br /> sales increase
          </p>
        </div>
        <div className="border border-white space-y-4 rounded-full h-[200px] w-[200px] flex flex-col text-center items-center justify-center">
          {" "}
          <p
            ref={(el) => (text4Refs.current[0] = el!)}
            className="font-extrabold text-4xl"
          >
            2019
          </p>
          <p ref={(el) => (text4Refs.current[1] = el!)} className="text-sm">
            year the agency was
            <br /> founded
          </p>
        </div>
        <div
          ref={circle5Ref}
          className="border border-white space-y-4 mt-[5%] rounded-full h-96 w-96 flex flex-col text-center items-center justify-center"
        >
          <p
            ref={(el) => (text5Refs.current[0] = el!)}
            className="font-extrabold text-3xl"
          >
            START
          </p>
          <p ref={(el) => (text5Refs.current[1] = el!)} className="text-sm">
            lets start cooperation
            <br /> right now
          </p>
        </div>
      </div>
    </>
  );
};

export default Circles;
