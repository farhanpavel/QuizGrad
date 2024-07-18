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
    <div className="bg-[#ECECE8] h-[85vh] w-[30%]  sm:w-[23%] p-1">
      <ul className="space-y-8 font-bold font-custom  mt-3">
        <li>
          <Link
            href="/teacherdashboard/home"
            className={`flex items-center ${
              pathname === "/teacherdashboard/home" ? "bg-slate-500 p-3" : ""
            }`}
          >
            <FaHome className="text-2xl mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/teacherdashboard/create-student"
            className={`flex items-center ${
              pathname === "/teacherdashboard/create-student"
                ? "bg-slate-500 p-3"
                : ""
            }`}
          >
            <PiStudent className="text-2xl mr-2" />
            Create Student
          </Link>
        </li>
        <li>
          <Link
            href="/teacherdashboard/create-quiz"
            className={`flex items-center ${
              pathname === "/teacherdashboard/create-quiz"
                ? "bg-slate-500 p-3"
                : ""
            }`}
          >
            <FaQuestionCircle className="text-2xl mr-2" />
            Create Quiz
          </Link>
        </li>
        <li>
          <Link
            href="/teacherdashboard/quizresult"
            className={`flex items-center ${
              pathname === "/teacherdashboard/quizresult"
                ? "bg-slate-500 p-3"
                : ""
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
