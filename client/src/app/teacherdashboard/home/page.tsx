"use client";
import React from "react";
import Teacherdashboard from "../page";
import Cookies from "js-cookie";
export default function page() {
  const teacherName = Cookies.get("name");
  return (
    <div>
      <Teacherdashboard>
        <div className="mt-2  text-sm sm:text-xl text-center font-bold mx-auto 2xl:text-5xl">
          <h1>Welcome To Teacher Panel</h1>
          <div className="text-5xl 2xl:text-7xl font-extrabold uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-700">
              {teacherName}
            </span>
          </div>
        </div>
      </Teacherdashboard>
    </div>
  );
}
