"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Teacherdashboard from "../page";
import QuizForm from "@/app/_components/CreateQuizForm/page";
import { useRouter } from "next/navigation";
interface quiz {
  course_name: string;
  course_code: string;
}
export default function CreateQuiz() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quizData, setQuizData] = useState<quiz[]>([]);
  const teacherName = Cookies.get("name");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    const fetchCourse = async () => {
      const response = await fetch(
        `https://quizgrad-server-11zr.onrender.com/api/course/${teacherName}`
      );
      const json = await response.json();

      if (response.ok) {
        setQuizData(json);
      }
    };
    fetchCourse();
    fetchData();
  }, [quizData]);

  const enableForm = () => {
    setFormVisible(true);
  };
  const handleQuiz = (e: string) => {
    Cookies.set("code", e.toString());
    router.push("/teacherdashboard/create-quiz-main");
  };
  const disableForm = () => {
    setFormVisible(false);
  };
  const deletePass = async (e: string) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/course/${e}/${teacherName}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
  return (
    <div>
      <Teacherdashboard>
        <div
          className={`font-custom mx-8 space-y-2 mt-2 ${
            isFormVisible ? "opacity-50" : ""
          }`}
        >
          <h1 className="font-bold text-sm">Create Course</h1>

          <div className="space-x-4">
            <button
              className="bg-[#FCC822] py-1 px-4 font-custom font-bold rounded text-white"
              onClick={enableForm}
            >
              <Link href={""}>+ Add New</Link>
            </button>
          </div>
          <div>
            <div className="shadow-md sm:rounded-lg inline">
              <table className="mt-10  w-[140vh] 2xl:w-[120vh]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs   text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Course Title
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
                  {quizData &&
                    quizData.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {data.course_name}
                        </th>
                        <td className="px-6 py-4">{data.course_code}</td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleQuiz(data.course_code)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Create
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => deletePass(data.course_code)}
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
        </div>
        {isFormVisible && <QuizForm onClose={disableForm} />}
      </Teacherdashboard>
    </div>
  );
}
