"use client";
import React from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Background from "../images/Frame 149.png";
import Face from "../images/Face (2).png";
import Logo from "../images/Logo.png";

import Start from "../images/start.png";
import Hero from "../components/Hero";
import Circles from "../components/Circles";
import Business from "../components/Business";
import Services from "../components/Services";
import Steps from "../components/Steps";
import Change from "../components/Change";
import Footer from "../components/Footer";
import Team from "../components/Team";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Circles />
      <Business />
      <Services />
      <Steps />
      <Team />
      <Change />
      <Footer />
    </>
  );
};

export default HomePage;
