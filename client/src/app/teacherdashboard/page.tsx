"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Dashboardheader from "../_components/Dashboardheader/page";
import { ReactNode } from "react";
import TeacherPanel from "../_components/TeacherPanel/page";
import LoadingSpinner from "../_components/LoadingSpinner/page";
import { useRouter } from "next/navigation";
interface LayoutProps {
  children: ReactNode;
}

export default function Teacherdashboard({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const router = useRouter();
  useEffect(() => {
    const loggedin = Cookies.get("loggedin");
    const role = Cookies.get("role");

    if (loggedin !== "true" || role !== "2") {
      router.push("/signin");
      return;
    }
    setIsAuthorized(true);
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, [router]);
  if (isAuthorized === null) {
    return null;
  }
  return (
    <div>
      <Dashboardheader />
      <div className="flex ">
        <TeacherPanel />
        {loading ? <LoadingSpinner /> : <>{children}</>}
      </div>
    </div>
  );
}
