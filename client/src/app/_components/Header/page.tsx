import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <div className="flex flex-wrap justify-between  p-4 border-[1px] border-[#ECECE8] ">
        <div>
          <Image
            src="/images/Logo.png"
            width={260}
            height={200}
            alt="logo"
            className="2xl:w-[400px]"
          />
        </div>
        <div className="mt-[1.10rem] 2xl:mt-[1.4rem]  mx-8 hidden sm:block ">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-2 2xl:px-12 2xl:py-4 overflow-hidden font-medium text-[#FCC822] transition duration-300 ease-out border-2 border-[#FCC822] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FCC822] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#FCC822] transition-all duration-300 transform group-hover:translate-x-full ease">
              @Pavel
            </span>
            <span className="relative invisible">@pavel</span>
          </a>
        </div>
      </div>
    </div>
  );
}
