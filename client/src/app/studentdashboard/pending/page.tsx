"use client";
import React, { useState, useEffect } from "react";
import Studentdashboard from "../page";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { url } from "@/app/_components/Url/page";

interface student {
  teacher_name: string;
  course_code: string;
  active: Number;
}

export default function Page() {
  const [studentData, setStudentData] = useState<student[]>([]);
  const [isClicked, setClick] = useState<boolean>(true);
  const studentemail = Cookies.get("studentemail");
  const router = useRouter();

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch(`${url}/api/assignstudent/${studentemail}`);
      const json = await response.json();
      if (response.ok) {
        setStudentData(json);
      }
    };
    fetchStudent();
  }, []);
  const takeExam = async (name: string, code: string) => {
    Cookies.set("teachername", name.toString());
    Cookies.set("code", code.toString());
    const id = Cookies.get("code");
    const teacherName = Cookies.get("teachername");
    setClick(false);
    try {
      const response = await fetch(
        `${url}/api/assignstudent/${teacherName}/${id}/${studentemail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ active: 1 }),
        }
      );
      if (!response.ok) {
        alert("Server Error");
        throw new Error("Failed to submit data");
      } else {
        router.push("/studentdashboard/questiongenerator");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div>
      <Studentdashboard>
        <div className="flex flex-col font-custom mx-8 space-y-2 mt-2 ">
          <div>
            <h1 className="font-bold text-lg">Pending Exams: </h1>
          </div>
          <div>
            <div className="shadow-md sm:rounded-lg inline">
              <table className="mt-10  w-[140vh] 2xl:w-[120vh] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs   text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Teacher Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                        Course Code
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
                          {data.teacher_name}
                        </th>
                        <td className="px-6 py-4">{data.course_code}</td>
                        <td className="px-6 py-4 text-right">
                          {data.active === 0 ? (
                            <button
                              onClick={() =>
                                takeExam(data.teacher_name, data.course_code)
                              }
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Take Exam
                            </button>
                          ) : (
                            <button
                              className="font-medium text-green-600 dark:text-gray-500"
                              disabled
                            >
                              Exam Taken
                            </button>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          {data.active === 0 ? (
                            <h1 className="font-medium text-red-600 dark:text-red-500">
                              Pending
                            </h1>
                          ) : (
                            <h1 className="font-medium text-green-600 dark:text-green-500">
                              Given
                            </h1>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Studentdashboard>
    </div>
  );
}
