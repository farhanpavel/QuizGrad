import React from "react";
import Image from "next/image";

import Admindashboard from "../page";
export default function AdminHome() {
  return (
    <Admindashboard>
      <div className="mt-2  text-sm sm:text-3xl font-bold mx-auto">
        <h1>Welcome To Admin Panel</h1>
      </div>
    </Admindashboard>
  );
}
