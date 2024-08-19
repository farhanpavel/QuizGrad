"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Dashboardheader from "../_components/Dashboardheader/page";
import { ReactNode, useEffect, useState } from "react";
import Dashboard from "../_components/Dashboard/page";
import LoadingSpinner from "../_components/LoadingSpinner/page";

interface LayoutProps {
  children: ReactNode;
}

export default function Admindashboard({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const router = useRouter();
  useEffect(() => {
    const loggedin = Cookies.get("loggedin");
    const role = Cookies.get("role");

    if (loggedin !== "true" || role !== "1") {
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

      <div className="flex  ">
        <Dashboard />
        {loading ? <LoadingSpinner /> : <>{children}</>}
      </div>
    </div>
  );
}
