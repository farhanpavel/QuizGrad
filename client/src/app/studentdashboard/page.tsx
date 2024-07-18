"use client";
import React, { useEffect, useState } from "react";
import Dashboardheader from "../_components/Dashboardheader/page";
import { ReactNode } from "react";
import StudentPanel from "../_components/StudentPanel/page";
import LoadingSpinner from "../_components/LoadingSpinner/page";

interface LayoutProps {
  children: ReactNode;
}

export default function Studentdashboard({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Dashboardheader />
      <div className="flex flex-wrap">
        <StudentPanel />
        {loading ? <LoadingSpinner /> : <>{children}</>}
      </div>
    </div>
  );
}
