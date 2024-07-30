"use client";
import React, { useState, useEffect } from "react";
import Teacherdashboard from "../page";
import Link from "next/link";
import Cookies from "js-cookie";
import QuizAddingForm from "@/app/_components/CreateQuizAddingForm/page";
interface Quiz {
  teacher_name: string;
  course_id: string;
  question: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour: string;
  ans: string;
  question_id: string;
}
export default function QuizMain() {
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const course_code = Cookies.get("code");
  const [isFormVisible, setFormVisible] = useState(false);

  const enableForm = () => {
    setFormVisible(true);
  };
  const disableForm = () => {
    setFormVisible(false);
  };
  const deletePass = async (e: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/question/${e}`, {
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
    const fetchQuiz = async () => {
      const response = await fetch(
        `http://localhost:4000/api/question/${course_code}`
      );
      const json = await response.json();
      if (response.ok) {
        setQuizData(json);
      }
    };
    fetchQuiz();
  }, [quizData]);

  return (
    <div>
      <Teacherdashboard>
        <div className="flex flex-col">
          <div className="mx-8 space-y-2 mt-2">
            <h1 className="font-bold text-sm">Create Quiz</h1>
            <div className="space-x-4">
              <button
                onClick={enableForm}
                className="bg-[#FCC822] py-1 px-4 font-custom font-bold rounded text-white"
              >
                <Link href={""}>+ Add New</Link>
              </button>
              <button className="bg-[#FCC822] py-1 px-4 font-custom font-bold rounded text-white">
                <Link href={""}>+ Assign Student</Link>
              </button>
            </div>
          </div>

          <div>
            <div className="shadow-md sm:rounded-lg inline">
              <table className="mt-10 mx-4  w-[130vh] 2xl:w-[120vh]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs   text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Question
                    </th>
                    <th>Option 1</th>
                    <th>Option 2</th>
                    <th>Option 3</th>

                    <th>Option 4</th>
                    <th>Ans</th>
                    <th colSpan={2} className="text-center">
                      Operation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quizData &&
                    quizData.map((data) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {data.question.substring(0, 10) + "..."}
                        </th>
                        <td className="px-6 py-4">
                          {data.optionOne.substring(0, 10) + "..."}
                        </td>
                        <td className="px-6 py-4">
                          {data.optionTwo.substring(0, 10) + "..."}
                        </td>
                        <td className="px-6 py-4">
                          {data.optionThree.substring(0, 10) + "..."}
                        </td>
                        <td className="px-6 py-4">
                          {data.optionFour.substring(0, 10) + "..."}
                        </td>
                        <td className="px-6 py-4">{data.ans}</td>

                        <td className="px-6 py-4 text-right">
                          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => deletePass(data.question_id)}
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
        {isFormVisible && <QuizAddingForm onClose={disableForm} />}
      </Teacherdashboard>
    </div>
  );
}
