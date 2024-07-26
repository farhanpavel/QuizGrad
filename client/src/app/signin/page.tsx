"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Signin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((x) => ({
      ...x,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/user/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("invalid");
      }
      const data = await response.json();
      if (
        data &&
        data.email === email &&
        data.password === password &&
        data.id === 1
      ) {
        alert("Success");
        router.push("/admindashboard/home");
      } else if (
        data &&
        data.email === email &&
        data.password === password &&
        data.id === 2
      ) {
        alert("Success");
        router.push("/teacherdashboard/home");
      } else if (
        data &&
        data.email === email &&
        data.password === password &&
        data.id === 3
      ) {
        alert("Success");
        router.push("/studentdashboard/home");
      } else {
        alert("Invalid email and password");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

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
            <form
              action=""
              className="flex flex-col gap-y-2"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Password"
                onChange={handleChange}
              />

              <div className="space-x-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#FCC822] text-white"
                >
                  Login
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
            </form>
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
