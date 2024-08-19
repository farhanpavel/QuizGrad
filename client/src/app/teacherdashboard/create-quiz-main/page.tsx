"use client";
import React, { useState, useEffect } from "react";
import Teacherdashboard from "../page";
import Link from "next/link";
import Cookies from "js-cookie";
import QuizAddingForm from "@/app/_components/CreateQuizAddingForm/page";
import EditQuizForm from "@/app/_components/EditQuizForm/page";
import AssignForm from "@/app/_components/AssignStudentForm/page";
import { url } from "@/app/_components/Url/page";
import { useAppContext } from "@/app/_components/Context/page";

export default function QuizMain() {
  const { quizData, setquizData } = useAppContext();
  const { assignData, setassignData } = useAppContext();
  const course_code = Cookies.get("code");
  const [isFormVisible, setFormVisible] = useState(false);
  const [isFormTwoVisible, setFormTwoVisible] = useState(false);

  const [isEditFormVisible, setEditFormVisible] = useState<boolean>(false);
  const [questionId, setQuestionId] = useState<string | null>(null);
  const teacherName = Cookies.get("name");
  const enableForm = () => {
    setFormVisible(true);
    setEditFormVisible(false);
  };
  const enableformTwo = () => {
    setFormTwoVisible(true);
  };
  const disableformTwo = () => {
    setFormTwoVisible(false);
  };
  const disableForm = () => {
    setFormVisible(false);
    setEditFormVisible(false);
  };
  const editPass = (e: string) => {
    setEditFormVisible(true);
    setFormVisible(false);
    setQuestionId(e);
  };
  const deletePass = async (e: string) => {
    try {
      const response = await fetch(`${url}/api/question/${e}`, {
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
        setquizData((prevData) =>
          prevData.filter((item) => item.question_id !== e)
        );
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  const studentDelete = async (e: string) => {
    try {
      const response = await fetch(
        `${url}/api/assignstudent/${e}/${course_code}`,
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
        setassignData((prevData) =>
          prevData.filter((item) => item.student_email !== e)
        );
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch(
        `${url}/api/question/course/${course_code}/${teacherName}`
      );
      const json = await response.json();
      if (response.ok) {
        console.log(json);
        setquizData(json);
      }
    };
    const studentInfo = async () => {
      const response = await fetch(
        `${url}/api/assignstudent/${course_code}/${teacherName}`
      );
      const json = await response.json();
      if (response.ok) {
        setassignData(json);
      }
    };

    fetchQuiz();
    studentInfo();
  }, []);

  return (
    <div>
      <Teacherdashboard>
        <div className="flex flex-col">
          <div className="mx-8 space-y-2 mt-2">
            <h1 className="font-bold text-lg">Create Quiz</h1>
            <div className="space-x-4">
              <button
                onClick={enableForm}
                className="bg-black py-1 px-4 font-custom text-sm font-medium rounded text-white"
              >
                <Link href={""}>+ Add New</Link>
              </button>
              <button
                onClick={enableformTwo}
                className="bg-black py-1 px-4 font-custom text-sm font-medium rounded text-white"
              >
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
                    quizData.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                      >
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
                          <button
                            onClick={() => editPass(data.question_id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
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
          <div>
            <div className="shadow-md sm:rounded-lg inline">
              <table className="mt-10 mx-4  w-[130vh] 2xl:w-[120vh]  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs   text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Student Email
                    </th>

                    <th className="px-6 py-3">Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {assignData &&
                    assignData.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {data.student_email}
                        </th>

                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => studentDelete(data.student_email)}
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
        {isEditFormVisible && (
          <EditQuizForm onClose={disableForm} selectedId={questionId} />
        )}
        {isFormTwoVisible && <AssignForm onClose={disableformTwo} />}
      </Teacherdashboard>
    </div>
  );
}
