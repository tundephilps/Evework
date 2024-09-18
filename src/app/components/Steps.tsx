import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="px-12 bg-black text-white relative py-12 ">
      <div className="lg:flex flex-row justify-between text-6xl pb-24 hidden">
        <h1
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
        >
          OUR
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="80"
        >
          6 STEPS <br /> TO
        </h1>
        <h1
          className="mt-12"
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="120"
        >
          SUCCESSFUL <br />
          <span className="text-[#FB4E02]">COOPERATION &#8595; </span>
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <tbody>
            <tr className="border-t border-b border-white group hover:text-orange-500 ">
              <td className="lg:w-[330px] w-[100px] py-4 text-white">01</td>
              <td className="text-5xl font-bold py-4 flex flex-row items-center space-x-2">
                <FaArrowRight className="text-orange-500 hidden group-hover:block transition-opacity duration-300" />
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  PLAN
                </span>
              </td>
              <td className="text-sm text-start text-white py-4 ">
                Craft a plan encompassing project scope, goals, deliverables,
                <br />
                timeline, and resources.
              </td>
            </tr>
            <tr className="border-t border-b border-white group hover:text-orange-500">
              <td className="py-4 text-white">02</td>
              <td className="text-5xl font-bold py-4 flex flex-row items-center space-x-2">
                <FaArrowRight className="text-orange-500 hidden group-hover:block transition-opacity duration-300" />
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  DESIGN
                </span>
              </td>
              <td className="text-sm text-start text-white py-4 ">
                We create a user-friendly interface that effectively conveys
                <br />
                engages the target audience.
              </td>
            </tr>
            <tr className="border-t border-b border-white group hover:text-orange-500">
              <td className="py-4 text-white">03</td>
              <td className="text-5xl font-bold py-4 flex flex-row items-center space-x-2">
                <FaArrowRight className="text-orange-500 hidden group-hover:block transition-opacity duration-300" />
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  DEVELOPMENT
                </span>
              </td>
              <td className="text-sm text-start text-white py-4">
                We create a user-friendly interface that effectively conveys
                <br />
                engages the target audience.
              </td>
            </tr>
            <tr className="border-t border-b border-white group hover:text-orange-500">
              <td className="py-4 text-white">04</td>
              <td className="text-5xl font-bold py-4 flex flex-row items-center space-x-2">
                <FaArrowRight className="text-orange-500 hidden group-hover:block transition-opacity duration-300" />
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  TEST
                </span>
              </td>
              <td className="text-sm text-start text-white py-4">
                We create a user-friendly interface that effectively conveys
                <br />
                engages the target audience.
              </td>
            </tr>
            <tr className="border-t border-b border-white group hover:text-orange-500">
              <td className="py-4 text-white">05</td>
              <td className="text-5xl font-bold py-4 flex flex-row items-center space-x-2">
                <FaArrowRight className="text-orange-500 hidden group-hover:block transition-opacity duration-300" />
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  SUPPORT
                </span>
              </td>
              <td className="text-sm text-start text-white py-4">
                We create a user-friendly interface that effectively conveys
                <br />
                engages the target audience.
              </td>
            </tr>
            <tr className="border-t border-b border-white group hover:text-orange-500">
              <td className="py-4 text-white">06</td>
              <td className="text-5xl font-bold py-4 flex flex-row items-center space-x-2">
                <FaArrowRight className="text-orange-500 hidden group-hover:block transition-opacity duration-300" />
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  SCALE
                </span>
              </td>
              <td className="text-sm text-start text-white py-4">
                We create a user-friendly interface that effectively conveys
                <br />
                engages the target audience.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Steps;
