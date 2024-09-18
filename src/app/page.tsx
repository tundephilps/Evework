"use client";
import { useEffect } from "react";
import Circles from "./components/Circles";
import Intro from "./components/Intro";

import Aos from "aos";
import "aos/dist/aos.css";
import CustomCursor from "./components/CustomCursor";
export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
    });
  });
  return (
    <div>
      <CustomCursor />
      <Intro />
    </div>
  );
}
