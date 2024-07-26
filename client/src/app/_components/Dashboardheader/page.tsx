import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CiPower } from "react-icons/ci";

export default function Dashboardheader() {
  return (
    <div>
      <div className="shadow-xl p-3   flex flex-wrap  justify-between">
        <div>
          <Image src="/images/logo2.png" width={300} height={300} alt="logo" />
        </div>
        <div className=" text-black flex items-center text-sm font-bold hover:text-red-700">
          <Link href="/home" className="mt-5">
            <CiPower className="inline text-2xl  -mt-1" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
