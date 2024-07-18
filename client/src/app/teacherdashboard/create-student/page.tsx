"use client";
import React from "react";

import Link from "next/link";
import { useState } from "react";
import StudentForm from "@/app/_components/StudentForm/page";
import Teacherdashboard from "../page";

export default function page() {
  const [isFormVisible, setFormVisible] = useState(false);

  const enableForm = () => {
    setFormVisible(true);
  };
  const disableForm = () => {
    setFormVisible(false);
  };
  return (
    <div>
      <Teacherdashboard>
        <div
          className={`font-custom mx-8 space-y-2 mt-2 ${
            isFormVisible ? "opacity-50" : ""
          }`}
        >
          <h1 className="font-sm text-sm">Create Student</h1>
          <button
            className="bg-[#FCC822] py-1 px-4 font-custom font-bold rounded text-white"
            onClick={enableForm}
          >
            <Link href={""}>+ Add New</Link>
          </button>
        </div>
        {isFormVisible && <StudentForm onClose={disableForm} />}
      </Teacherdashboard>
    </div>
  );
}
