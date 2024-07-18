import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CiPower } from "react-icons/ci";

export default function Dashboardheader() {
  return (
    <div>
      <div className="bg-[#FCC822] p-3 border-b-2 border-[#ECECE8] flex flex-wrap  justify-between">
        <div>
          <Image src="/images/logo2.png" width={300} height={300} alt="logo" />
        </div>
        <div className=" text-white flex items-center text-md font-medium">
          <Link href="/home" className="mt-5">
            <CiPower className="inline text-2xl" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
