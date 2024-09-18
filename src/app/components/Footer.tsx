import React from "react";
import Image from "next/image";
import Logo from "../images/Logo.png";

import Background from "../images/Frame 149.png";

const Footer = () => {
  return (
    <div>
      <div className="relative h-[70vh] bg-opacity-50 bg-black">
        <Image
          src={Background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[70vh] bg-opacity-50 bg-black  text-white p-4">
          {/* Footer content */}
          <p className="text-center lg:text-9xl text-3xl py-12 underline font-bold hover:text-[#FB4E02] hover:font-serif ">
            LET'S DISCUSS
          </p>
          <div
            className="grid lg:grid-cols-3 grid-cols-2"
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
            data-aos-delay="10"
          >
            <div>
              <Image src={Logo} alt="" />
            </div>
            <div className="space-y-4">
              <p className="pb-2">Pages:</p>

              <p className="text-xs">About Us</p>
              <p className="text-xs">Project</p>
              <p className="text-xs">Services</p>
              <p className="text-xs">Steps of work</p>
            </div>
            <div className="space-y-4 lg:block hidden">
              <p className="pb-2">Social media:</p>

              <p className="text-xs">Instagram</p>
              <p className="text-xs">X</p>
              <p className="text-xs">Whatsapp</p>
              <p className="text-xs">Telegram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
