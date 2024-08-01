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
    router.push("/");
  };

  return (
    <div>
      <div className="shadow-xl p-3 flex flex-wrap justify-between">
        <div>
          <Image src="/images/logo2.png" width={300} height={300} alt="logo" />
        </div>
        <div className="text-black flex items-center text-sm font-bold hover:text-red-700">
          <button
            onClick={logOut}
            className="relative mt-5 inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-[#FCC822] transition duration-300 ease-out border-2 border-[#FCC822] rounded-full shadow-md group"
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
              Logout
            </span>
            <span className="relative invisible">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
