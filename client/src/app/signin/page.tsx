"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Signin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { email, password } = user;
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loggedin = Cookies.get("loggedin");
    const role = Cookies.get("role");

    if (loggedin === "true") {
      if (role === "1") {
        router.replace("/admindashboard/home");
      } else if (role === "2") {
        router.replace("/teacherdashboard/home");
      } else if (role === "3") {
        router.replace("/studentdashboard/home");
      }
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div></div>;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((x) => ({
      ...x,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://quizgrad-server-11zr.onrender.com/api/user/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("invalid");
      }
      const data = await response.json();
      if (data && data.email === email && data.password === password) {
        Cookies.set("loggedin", "true");
        Cookies.set("role", data.id.toString());
        Cookies.set("name", data.name.toString());
        Cookies.set("studentemail", data.email.toString());
        alert("Login successful!");

        if (data.id === 1) {
          router.push("/admindashboard/home");
        } else if (data.id === 2) {
          router.push("/teacherdashboard/home");
        } else if (data.id === 3) {
          router.push("/studentdashboard/home");
        }
      } else {
        alert("Invalid email and password");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-3/4 m-auto  flex flex-wrap sm:flex-nowrap  shadow-lg shadow-yellow-600 justify-around text-center p-16 ">
          <div className="space-y-7 flex flex-wrap flex-col justify-center items-center">
            <div>
              <Image
                src="/images/Logo.png"
                width={300}
                height={300}
                alt="logo"
                className="m-auto sm:w-[300px] 2xl:w-[500px]"
              />
            </div>
            <div className="text-center space-y-1 2xl:text-2xl text-md">
              <h1>Welcome back!</h1>
              <p>Please Login To Your Account</p>
            </div>
            <div className="2xl:w-3/4">
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
                      href={"/signup"}
                      className="px-6 py-2 border-[1px] border-[#FCC822] text-[#FCC822]"
                    >
                      Sign up
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="order-first sm:order-last flex items-center">
            <Image
              src="/images/Graduatelogo.png"
              width={400}
              height={400}
              alt="logo"
              className="lg:w-[400px] md:w-[300px] 2xl:w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
