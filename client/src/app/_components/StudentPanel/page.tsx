import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function StudentPanel() {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 shadow-2xl min-h-[100vh] w-[30%] sm:w-[23%] p-4">
      <ul className="space-y-6 font-bold font-custom mt-8">
        <li>
          <Link
            href="/studentdashboard/home"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/studentdashboard/home"
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
            href="/studentdashboard/pending"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              pathname === "/studentdashboard/pending"
                ? "bg-slate-700 text-white p-3 rounded-lg"
                : "bg-white text-gray-800 hover:bg-slate-500 hover:text-white p-3 rounded-lg"
            }`}
          >
            <MdOutlinePending className="text-2xl mr-2" />
            Pending
          </Link>
        </li>
      </ul>
    </div>
  );
}
