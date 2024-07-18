"use client";
import React, { useState, useEffect } from "react";
import Dashboardheader from "../_components/Dashboardheader/page";
import { ReactNode } from "react";
import TeacherPanel from "../_components/TeacherPanel/page";
import LoadingSpinner from "../_components/LoadingSpinner/page";
interface LayoutProps {
  children: ReactNode;
}

export default function Teacherdashboard({ children }: LayoutProps) {
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
        <TeacherPanel />
        {loading ? <LoadingSpinner /> : <>{children}</>}
      </div>
    </div>
  );
}
