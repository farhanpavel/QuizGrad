import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { url } from "../Url/page";

interface TeacherFormProps {
  onClose: () => void;
}

const TeacherForm: React.FC<TeacherFormProps> = ({ onClose }) => {
  const [user, setUser] = useState({
    id: 2,
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
          setUser({
            id: 2,
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
        }
      } catch (err) {
        console.log("error", err);
      }
    } else {
      alert("Password Doesnot Match");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 md:1/2 rounded">
        <div className="text-right text-2xl font-bold -mt-4">
          <button onClick={onClose}>&times;</button>
        </div>
        <h1 className="text-center text-lg font-bold">Create Teacher</h1>
        <form action="" className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col text-sm">
            <label htmlFor="">Name:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-sm">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col text-sm">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-sm">
            <label htmlFor="">Confirm Password:</label>
            <input
              type="password"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="confirmpassword"
              value={confirmpassword}
              onChange={handleChange}
            />
          </div>
          <div className="text-center mt-5">
            <button
              type="submit"
              className="bg-black py-1 px-4 font-custom text-sm  rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TeacherForm;
