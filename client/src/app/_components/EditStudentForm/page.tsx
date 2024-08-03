import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
interface StudentFormProps {
  onClose: () => void;
  selectedEmail: string | null;
}
const EditStudentForm: React.FC<StudentFormProps> = ({
  onClose,
  selectedEmail,
}) => {
  const [user, setUser] = useState({
    id: 3,
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [studentData, setStudentData] = useState([]);
  const router = useRouter();
  const { name, email, password, confirmpassword } = user;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    console.log(studentData);
    if (password == confirmpassword) {
      try {
        const response = await fetch(
          `https://quizgrad-server-11zr.onrender.com/api/user/${selectedEmail}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        if (!response.ok) {
          alert("Server Error");
          throw new Error("Failed to submit data");
        } else {
          alert("Success");
          setUser({
            id: 3,
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

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(
          `https://quizgrad-server-11zr.onrender.com/api/user/${selectedEmail}`
        );
        if (response.ok) {
          const json = await response.json();
          setUser((prevUser) => ({
            ...prevUser,
            name: json.name,
            email: json.email,
            password: json.password,
            confirmpassword: json.confirmpassword,
          }));
        } else {
          console.error("Failed to fetch student data");
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudent();
  }, [selectedEmail]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 md:1/2 rounded">
        <div className="text-right text-2xl font-bold -mt-4">
          <button onClick={onClose}>&times;</button>
        </div>
        <h1 className="text-center text-lg font-bold">Create Student</h1>
        <form action="" className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Name:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Confirm Password:</label>
            <input
              type="password"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="confirmpassword"
              value={confirmpassword}
              onChange={handleChange}
            />
          </div>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#FCC822] py-1 px-4 font-custom  rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditStudentForm;
