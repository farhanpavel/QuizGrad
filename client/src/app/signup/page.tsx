"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { url } from "../_components/Url/page";
import LoadingSpinner from "../_components/LoadingSpinner/page";

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
  const [loading, setLoading] = useState(true);
  const [isSpin, setSpin] = useState(true);
  useEffect(() => {
    const loggedin = Cookies.get("loggedin");
    const role = Cookies.get("role");

    if (loggedin === "true") {
      // Redirect to the appropriate dashboard based on the role
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
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !name || !confirmpassword) {
      alert("Please fill everything.");
      return;
    }
    setSpin(false);
    if (password == confirmpassword) {
      try {
        const response = await fetch(`${url}/api/user`, {
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
          setSpin(true);
          router.push("/signin");
        }
      } catch (err) {
        console.log("error", err);
      }
    } else {
      setSpin(true);
      alert("Password Doesnot Match");
    }
  };
  return (
    <div>
      {isSpin ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-[80%] sm:w-3/4 m-auto  flex flex-wrap sm:flex-nowrap  shadow-lg shadow-yellow-600 justify-around text-center p-16 ">
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
                <p>Please Signup To Your Account</p>
              </div>
              <div className="2xl:w-3/4">
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
      ) : (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
