import React from "react";

const Business = () => {
  return (
    <div className="px-12 bg-black text-white relative py-32 space-y-12">
      <div className="flex flex-row items-center justify-between gap-12">
        <h1 className="lg:text-6xl  text-3xl font-extrabold">BUSINESSES</h1>{" "}
        <div className="h-[1px] w-full bg-white lg:block hidden" />{" "}
        <div className="h-[80px] w-[150px]  bg-white rounded-full" />
      </div>
      <div className="flex flex-row-reverse items-center justify-between gap-12">
        <h1 className="lg:text-6xl text-3xl font-extrabold whitespace-nowrap">
          WE HAVE
        </h1>{" "}
        <div className="h-[1px] w-full bg-white lg:block hidden" />{" "}
        <div className="h-[80px] w-[130px]  bg-white rounded-full" />
      </div>
      <div className="flex flex-row items-center justify-between gap-12">
        <h1 className="lg:text-6xl text-3xl font-extrabold">WORKED</h1>{" "}
        <div className="h-[1px] w-full bg-white lg:block hidden" />{" "}
        <div className="h-[80px] w-[130px]  bg-white rounded-full" />
      </div>
      <div className="flex flex-row-reverse items-center justify-between gap-12">
        <h1 className="lg:text-6xl text-3xl font-extrabold whitespace-nowrap">
          WITH
        </h1>{" "}
        <div className="h-[1px] w-full bg-white lg:block hidden" />{" "}
        <div className="h-[80px] w-[110px]  bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Business;
