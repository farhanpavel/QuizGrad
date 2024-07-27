import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

import { usePathname } from "next/navigation";
import { MdOutlinePending } from "react-icons/md";
export default function StudentPanel() {
  const pathname = usePathname();
  return (
    <div className="bg-[#dbdbdb] shadow-2xl sm:h-[100vh] w-[30%]  sm:w-[23%] p-1">
      <ul className="space-y-8 font-bold font-custom  mt-3">
        <li>
          <Link
            href="/studentdashboard/home"
            className={`flex items-center ${
              pathname === "/studentdashboard/home" ? "bg-slate-500 p-3" : ""
            }`}
          >
            <FaHome className="text-2xl mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/studentdashboard/pending"
            className={`flex items-center ${
              pathname === "/studentdashboard/pending" ? "bg-slate-500 p-3" : ""
            }`}
          >
            <MdOutlinePending className="text-2xl mr-2" />
            Pending
          </Link>
        </li>
        <li>
          <Link
            href="/studentdashboard/quizlist"
            className={`flex items-center ${
              pathname === "/studentdashboard/quizlist"
                ? "bg-slate-500 p-3"
                : ""
            }`}
          >
            <FaQuestionCircle className="text-2xl mr-2" />
            Quiz list
          </Link>
        </li>
      </ul>
    </div>
  );
}
