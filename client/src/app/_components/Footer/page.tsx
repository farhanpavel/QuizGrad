import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <div>
        <Image
          src="/images/Logo.png"
          width={200}
          height={100}
          alt="Logo"
          className="mx-auto"
        />
      </div>
      <div className="mt-6 sm:flex sm:flex-wrap sm:justify-center sm:flex-row">
        <ul className="sm:flex text-center gap-x-6 text-[#4a4a4a] font-rubik">
          <li>Contact</li>
          <li>FAQ</li>
          <li>Support</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="p-7 mt-5 ">
        <div className="border-t-[0.1px] p-4 mb-7 border-[#e0dede]">
          <div className="sm:flex sm:flex-wrap sm:justify-between font-rubik text-[#4a4a4a]">
            <div>
              <p>Copyright © 2024 | Pavel, All rights reserved.</p>
            </div>
            <div>
              <ul className="sm:flex sm:flex-wrap text-center  gap-x-7">
                <li>Contact</li>
                <li>Terms & Condition</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
