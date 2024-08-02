import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { RiQuestionAnswerFill } from "react-icons/ri";

export default function TeacherPanel() {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 shadow-2xl min-h-[100vh] w-[30%] sm:w-[23%] p-4">
      <ul className="space-y-6 font-bold font-custom mt-8 ">
        <li>
          <Link
            href="/teacherdashboard/home"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/teacherdashboard/home"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <FaHome className="md:text-2xl mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/teacherdashboard/create-student"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/teacherdashboard/create-student"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <PiStudent className="text-2xl mr-2" />
            Student List
          </Link>
        </li>
        <li>
          <Link
            href="/teacherdashboard/create-quiz"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/teacherdashboard/create-quiz"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <FaQuestionCircle className="text-2xl mr-2" />
            Create Quiz
          </Link>
        </li>
        <li>
          <Link
            href="/teacherdashboard/quizresult"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/teacherdashboard/quizresult"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <RiQuestionAnswerFill className="text-2xl mr-2" />
            Quiz Result
          </Link>
        </li>
      </ul>
    </div>
  );
}
