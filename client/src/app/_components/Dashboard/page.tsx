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
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 shadow-2xl min-h-[100vh] w-[30%] sm:w-[23%] p-4">
      <ul className="space-y-8 font-bold font-custom mt-3">
        <li>
          <Link
            href="/admindashboard/home"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/admindashboard/home"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <FaHome className="text-2xl mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/admindashboard/create-teacher"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/admindashboard/create-teacher"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <FaChalkboardTeacher className="text-2xl mr-2" />
            Create Teacher
          </Link>
        </li>
        <li>
          <Link
            href="/admindashboard/create-student"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/admindashboard/create-student"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <PiStudent className="text-2xl mr-2" />
            Student List
          </Link>
        </li>
      </ul>
    </div>
  );
}
