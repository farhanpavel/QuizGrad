"use client";
import React from "react";
import Studentdashboard from "../page";
import Cookies from "js-cookie";
export default function page() {
  const studentName = Cookies.get("name");
  return (
    <div>
      <Studentdashboard>
        <div className="mt-2  text-sm sm:text-xl text-center font-bold mx-auto 2xl:text-5xl">
          <h1>Welcome To Student Panel</h1>
          <div className="text-5xl 2xl:text-7xl font-extrabold uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-700">
              {studentName}
            </span>
          </div>
        </div>
      </Studentdashboard>
    </div>
  );
}
