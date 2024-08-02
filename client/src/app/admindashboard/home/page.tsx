"use client";
import React from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import Admindashboard from "../page";
export default function AdminHome() {
  const admin = Cookies.get("name");
  return (
    <Admindashboard>
      <div className="mt-2  text-sm sm:text-xl text-center font-bold mx-auto 2xl:text-5xl">
        <h1>Welcome To Admin Panel</h1>
        <div className="text-5xl 2xl:text-7xl font-extrabold uppercase">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-700">
            {admin}
          </span>
        </div>
      </div>
    </Admindashboard>
  );
}
