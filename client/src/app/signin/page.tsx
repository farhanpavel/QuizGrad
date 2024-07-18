import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Signin() {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap shadow-lg place-content-center justify-around text-center p-16 mt-16">
        <div className="space-y-7 flex flex-wrap flex-col justify-center items-center">
          <div>
            <Image
              src="/images/Logo.png"
              width={300}
              height={300}
              alt="logo"
              className="m-auto"
            />
          </div>
          <div className="text-center space-y-1">
            <h1>Welcome back!</h1>
            <p>Please Login To Your Account</p>
          </div>
          <div>
            <form action="" className="flex flex-col gap-y-2">
              <input
                type="email"
                name="name"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Password"
              />
            </form>
          </div>
          <div className="space-x-3">
            <button>
              <Link href={""} className="px-6 py-2 bg-[#FCC822] text-white">
                Login
              </Link>
            </button>
            <button>
              <Link
                href={""}
                className="px-6 py-2 border-[1px] border-[#FCC822] text-[#FCC822]"
              >
                Sign up
              </Link>
            </button>
          </div>
        </div>
        <div className="order-first md:order-last">
          <Image
            src="/images/Graduatelogo.png"
            width={400}
            height={400}
            alt="logo"
            className="lg:w-[400px] md:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
