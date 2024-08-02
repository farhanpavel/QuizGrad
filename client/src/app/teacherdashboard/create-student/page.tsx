"use client";
import React from "react";
import Teacherdashboard from "../page";
import Link from "next/link";
import { useState, useEffect } from "react";
import StudentForm from "@/app/_components/StudentForm/page";
import EditStudentForm from "@/app/_components/EditStudentForm/page";

interface student {
  name: string;
  email: string;
}
export default function Page() {
  const [isFormVisible, setFormVisible] = useState<boolean>(false);
  const [studentData, setStudentData] = useState<student[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  const [isEditFormVisible, setEditFormVisible] = useState<boolean>(false);
  const enableForm = () => {
    setFormVisible(true);
    setEditFormVisible(false);
  };
  const disableForm = () => {
    setFormVisible(false);
    setEditFormVisible(false);
  };
  const EmailPass = (e: string) => {
    setEditFormVisible(true);
    setFormVisible(false);
    setSelectedEmail(e);
  };
  const deletePass = async (e: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/${e}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        alert("Server Error");
        throw new Error("Failed to submit data");
      } else {
        alert("Success");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch("http://localhost:4000/api/student");
      const json = await response.json();
      if (response.ok) {
        setStudentData(json);
      }
    };
    fetchStudent();
  }, [studentData]);

  return (
    <div>
      <Teacherdashboard>
        <div
          className={`font-custom mx-8 space-y-2 mt-2 ${
            isFormVisible ? "opacity-50" : ""
          }`}
        >
          <h1 className="font-bold text-sm">Create Student</h1>
          <button
            className="bg-[#FCC822] py-1 px-4 font-custom font-bold rounded text-white"
            onClick={enableForm}
          >
            <Link href={""}>+ Add New</Link>
          </button>

          <div className="shadow-md sm:rounded-lg inline">
            <table className="mt-10  w-[140vh] 2xl:w-[120vh]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs   text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Student Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Email
                      <a href="#">
                        <svg
                          className="w-3 h-3 ms-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                  <th colSpan={2} className="text-center">
                    Operation
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentData &&
                  studentData.map((data, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.name}
                      </th>
                      <td className="px-6 py-4">{data.email}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => {
                            EmailPass(data.email);
                          }}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => {
                            deletePass(data.email);
                          }}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {isFormVisible && <StudentForm onClose={disableForm} />}
        {isEditFormVisible && (
          <EditStudentForm
            onClose={disableForm}
            selectedEmail={selectedEmail}
          />
        )}
      </Teacherdashboard>
    </div>
  );
}
