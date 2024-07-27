"use client";
import React, { useEffect, useState } from "react";
import Dashboardheader from "../_components/Dashboardheader/page";
import { ReactNode } from "react";
import StudentPanel from "../_components/StudentPanel/page";
import LoadingSpinner from "../_components/LoadingSpinner/page";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
interface LayoutProps {
  children: ReactNode;
}

export default function Studentdashboard({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const router = useRouter();
  useEffect(() => {
    const loggedin = Cookies.get("loggedin");
    const role = Cookies.get("role");

    if (loggedin !== "true" || role !== "3") {
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
      <div className="flex flex-wrap">
        <StudentPanel />
        {loading ? <LoadingSpinner /> : <>{children}</>}
      </div>
    </div>
  );
}
