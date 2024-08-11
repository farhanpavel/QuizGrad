import React from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { CiPower } from "react-icons/ci";

export default function DashboardHeader() {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("loggedin");
    Cookies.remove("role");
    Cookies.remove("name");
    Cookies.remove("code");
    Cookies.remove("studentemail");
    Cookies.remove("teachername");
    Cookies.remove("email");
    Cookies.remove("marks");
    router.push("/");
  };

  return (
    <div className=" h-14 gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 flex justify-between   items-center">
      <div className="flex items-center">
        <Image
          src="/images/logo2.png"
          width={100}
          height={100}
          alt="logo"
          className="mr-3"
        />
      </div>
      <button
        onClick={logOut}
        className="relative inline-flex items-center justify-center    px-4 py-1 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex text-sm font-sm items-center justify-center w-full h-full bg-white text-black transition-all duration-300 transform group-hover:translate-x-full ease">
          Logout
        </span>
        <span className="relative invisible text-sm">Logout</span>
      </button>
    </div>
  );
}
