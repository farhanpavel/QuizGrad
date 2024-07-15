import React from "react";
import Image from "next/image";
import Header from "../_components/Header/page";
export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="flex flex-wrap justify-around ">
        <div className=" md:order-last">
          <Image
            src="/images/Heroimage.png"
            width={500}
            height={400}
            alt="hero"
            className="lg:w-[500px] sm:w-[450px] md:w-[400px]"
          />
        </div>
        <div className="flex flex-col flex-wrap  justify-center gap-10 mt-10 md:mt-0">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">
              Learn
              <br /> new concepts
              <br /> for each question
            </h1>
            <p>| We help you take exams and quizes securely </p>
          </div>
          <div className="space-x-4">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-8 py-2 text-sm  tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#FCC822] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#FCC822]  rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-[#FCC822]  transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Sign In
              </span>
            </a>
            {/*  */}
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-8 py-2 text-sm  tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#FCC822] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#FCC822]  rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-[#FCC822]  transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Sign Up
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:-mt-16 mt-10">
        <Image src="/images/line.png" width={240} height={200} alt="hero" />
      </div>
    </div>
  );
}
