"use client";
import React, { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import SuccessPage from "@/app/_components/SuccessPage/page";

interface Question {
  question: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour: string;
  time: string;
  course_name: string;
  question_id: string;
}

interface QuizAnswer {
  question_id: string;
  student_ans: string;
  student_email: string;
  student_name: string;
  teacher_name: string;
  course_code: string;
}

export default function QuestionGenerator() {
  const teachername = Cookies.get("teachername");
  const courseCode = Cookies.get("code");
  const studentEmail = Cookies.get("studentemail");
  const studentName = Cookies.get("name");
  const [isFormVisible, setFormVisible] = useState<boolean>(false);
  const [questionData, setQuestionData] = useState<Question[]>([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);

  const quizRef = useRef<QuizAnswer[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `http://localhost:4000/api/question/data/${courseCode}/${teachername}`
      );
      const json = await response.json();
      if (response.ok) {
        const initialQuiz = json.map((e: Question) => ({
          question_id: e.question_id,
          student_ans: "",
          student_email: studentEmail,
          student_name: studentName,
          teacher_name: teachername,
          course_code: courseCode,
        }));
        quizRef.current = initialQuiz;
        setQuestionData(json);
        setQuestionCount(json.length);
        setTimeLeft(parseInt(json[0].time) * 60);
      }
      setIsLoading(false);
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 && !isLoading) {
      handleSubmit();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleSubmit();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedQuiz = quizRef.current.map((item, idx) =>
      idx === index ? { ...item, student_ans: value } : item
    );
    quizRef.current = updatedQuiz;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log(quizRef.current);
    try {
      const response = await fetch(`http://localhost:4000/api/studentans`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizRef.current),
      });
      if (!response.ok) {
        alert("Server Error");
        throw new Error("Failed to submit data");
      } else {
        setFormVisible(true);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen gap-y-6">
      <div className="shadow-xl rounded-lg bg-white md:w-1/2 text-xl font-bold space-y-4 p-4 text-center">
        <h1 className="text-green-800 uppercase">{teachername}</h1>
        <h1 className="text-red-700">
          Course Name: {questionData[0].course_name}
        </h1>
        <h1 className="text-red-700">Course Code: {courseCode}</h1>
        <h1 className="text-red-700">Marks: {questionCount}</h1>
        <h1 className="text-red-700">Time: {formatTime(timeLeft)}</h1>
      </div>
      {questionData &&
        questionData.map((data, index) => (
          <div
            key={index}
            className="shadow-xl rounded-lg bg-white md:w-1/2 text-xl font-bold space-y-4 p-4"
          >
            <div className="mb-4 space-y-4">
              <div className="flex gap-x-2 items-center select-none">
                <h1 className="text-lg text-blue-700 uppercase">
                  {index + 1}. {data.question}
                </h1>
              </div>
              <div className="flex gap-x-2 items-center font-medium select-none">
                <input
                  type="radio"
                  id={`option1-${index}`}
                  name={`student_ans-${index}`}
                  value="A"
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                <label htmlFor={`option1-${index}`} className="text-sm">
                  {data.optionOne}
                </label>
              </div>
              <div className="flex gap-x-2 items-center font-medium select-none">
                <input
                  type="radio"
                  id={`option2-${index}`}
                  name={`student_ans-${index}`}
                  value="B"
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                <label htmlFor={`option2-${index}`} className="text-sm">
                  {data.optionTwo}
                </label>
              </div>
              <div className="flex gap-x-2 items-center font-medium select-none">
                <input
                  type="radio"
                  id={`option3-${index}`}
                  name={`student_ans-${index}`}
                  value="C"
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                <label htmlFor={`option3-${index}`} className="text-sm">
                  {data.optionThree}
                </label>
              </div>
              <div className="flex gap-x-2 items-center font-medium select-none">
                <input
                  type="radio"
                  id={`option4-${index}`}
                  name={`student_ans-${index}`}
                  value="D"
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                <label htmlFor={`option4-${index}`} className="text-sm">
                  {data.optionFour}
                </label>
              </div>
            </div>
          </div>
        ))}

      <div>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Submit
        </button>
      </div>
      {isFormVisible && <SuccessPage />}
    </div>
  );
}
