"use client";
import React from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Background from "../images/Frame 149.png";
import Face from "../images/Face (2).png";
import Logo from "../images/Logo.png";
import Start from "../images/start.png";
import { IoMdMenu } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-black bg-opacity-90 p-4">
        <div
          className="container mx-auto flex justify-between items-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <Image
            src={Logo}
            style={{ height: "40px", width: "103px" }}
            alt="Logo"
          />
          <ul className="lg:flex hidden space-x-6 text-white">
            <li className="hover:text-gray-300 cursor-pointer">About us</li>
            <li className="hover:text-gray-300 cursor-pointer">Projects</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">
              Steps of work
            </li>
          </ul>
          <div className="text-white lg:flex hidden">Contacts</div>
          <IoMdMenu className="lg:hidden block text-white text-3xl" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center  ">
        <div className="bg-black h-screen w-full absolute top-0"> </div>
        {/* <Image
        src={Background}
        className="z-0 "
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      /> */}

        <Image
          src={Face}
          className="z-10 absolute h-[85%] w-[50%] mt-16"
          alt="Background Image"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        />

        {/* Hero Content */}
        <div className="absolute z-10  text-white h-screen w-full px-12">
          <p
            className="lg:text-[120px] text-4xl font-extrabold mt-14 text-start"
            style={{ lineHeight: "130px" }}
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
          >
            CHANGING{" "}
          </p>
          <div className="flex flex-row  justify-between">
            <span className="text-[15px] justify-start lg:w-[13%] w-full">
              We bring customers to business through our own proven tools
            </span>
            <p
              className="lg:text-[120px] text-4xl font-extrabold text-end"
              style={{ lineHeight: "130px" }}
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="200"
            >
              YOUR
            </p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <p
              className="lg:text-[120px] text-4xl text-[#FB4E02] font-extrabold text-start"
              style={{ lineHeight: "130px" }}
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
            >
              VIEW{" "}
            </p>
            <div
              className="lg:text-[120px] text-4xl font-extrabold text-end  justify-end flex"
              style={{ lineHeight: "130px" }}
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
            >
              OF{" "}
              <span
                className="text-[12px]  mt-8 ml-4 text-start"
                style={{ lineHeight: "20px" }}
              >
                We created our own <br />
                Methodology that has <br />
                the best results in lead <br /> generation
              </span>
            </div>{" "}
          </div>
          <div className="flex flex-row items-center justify-between">
            <p
              className="lg:text-[120px] text-4xl font-extrabold text-start"
              style={{ lineHeight: "130px" }}
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
            >
              {" "}
              MARKETING
            </p>

            <Image
              src={Start}
              className="h-24 w-[151px]"
              alt=""
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
