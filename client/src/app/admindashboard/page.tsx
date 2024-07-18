"use client";

import Dashboardheader from "../_components/Dashboardheader/page";
import { ReactNode, useEffect, useState } from "react";
import Dashboard from "../_components/Dashboard/page";
import LoadingSpinner from "../_components/LoadingSpinner/page";
interface LayoutProps {
  children: ReactNode;
}

export default function Admindashboard({ children }: LayoutProps) {
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
      <div className="flex flex-wrap  ">
        <Dashboard />
        {loading ? <LoadingSpinner /> : <>{children}</>}
      </div>
    </div>
  );
}
