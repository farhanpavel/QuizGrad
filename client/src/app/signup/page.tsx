"use client";
import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
export default function Signup() {
  const [user, setUser] = useState({
    id: 3,
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const router = useRouter();
  const { name, email, password, confirmpassword } = user;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    if (password == confirmpassword) {
      try {
        const response = await fetch("http://localhost:4000/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (!response.ok) {
          alert("Server Error");
          throw new Error("Failed to submit data");
        } else {
          alert("Success");
          router.push("/signin");
        }
      } catch (err) {
        console.log("error", err);
      }
    } else {
      alert("Password Doesnot Match");
    }
  };
  return (
    <div>
      <div className="container mx-auto flex flex-wrap shadow-lg items-center justify-around p-16 mt-16">
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
            <p>Please Signup To Your Account</p>
          </div>
          <div>
            <form
              action=""
              className="flex flex-col gap-y-2"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Name"
                onChange={handleChange}
                value={name}
              />
              <input
                type="text"
                name="email"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Email"
                onChange={handleChange}
                value={email}
              />
              <input
                type="password"
                name="password"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Password"
                onChange={handleChange}
                value={password}
              />
              <input
                type="password"
                name="confirmpassword"
                className="border-[1px] border-[#C1BBBB] p-1 rounded-sm"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={confirmpassword}
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#FCC822] text-white "
              >
                Register
              </button>
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
