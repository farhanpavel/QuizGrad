"use client";
import React from "react";

import Link from "next/link";
import { useState, useEffect } from "react";

import Teacherdashboard from "../page";
import QuizForm from "@/app/_components/CreateQuizForm/page";

export default function page() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);
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
          <h1 className="font-sm text-sm">Create Quiz</h1>
          <div className="space-x-4">
            <button
              className="bg-[#FCC822] py-1 px-4 font-custom font-bold rounded text-white"
              onClick={enableForm}
            >
              <Link href={""}>+ Add New</Link>
            </button>
            <button className="bg-[#FCC822] py-1 px-4 font-custom font-bold rounded text-white">
              <Link href={""}>+ Assign Student</Link>
            </button>
          </div>
        </div>
        {isFormVisible && <QuizForm onClose={disableForm} />}
      </Teacherdashboard>
    </div>
  );
}
