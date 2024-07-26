import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

import { usePathname } from "next/navigation";

export default function Dashboard() {
  const pathname = usePathname();
  return (
    <div className="bg-[#dbdbdb] shadow-2xl sm:h-[100vh] w-[30%]  sm:w-[23%] p-1">
      <ul className="space-y-8 font-bold font-custom  mt-3">
        <li>
          <Link
            href="/admindashboard/home"
            className={`flex items-center ${
              pathname === "/admindashboard/home" ? "bg-slate-500 p-3" : ""
            }`}
          >
            <FaHome className="text-2xl mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/admindashboard/create-teacher"
            className={`flex items-center ${
              pathname === "/admindashboard/create-teacher"
                ? "bg-slate-500 p-3"
                : ""
            }`}
          >
            <FaChalkboardTeacher className="text-2xl mr-2" />
            Create Teacher
          </Link>
        </li>
        <li>
          <Link
            href="/admindashboard/create-student"
            className={`flex items-center ${
              pathname === "/admindashboard/create-student"
                ? "bg-slate-500 p-3"
                : ""
            }`}
          >
            <PiStudent className="text-2xl mr-2" />
            Create Student
          </Link>
        </li>
      </ul>
    </div>
  );
}
