"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { url } from "@/app/_components/Url/page";

interface Question {
  question: string;
  options: {
    optionOne: string;
    optionTwo: string;
    optionThree: string;
    optionFour: string;
  };
  course_name: string;
  question_id: string;
  correctAnswer: string;
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
  const email = Cookies.get("email");
  const course_code = Cookies.get("code");
  const mark = Cookies.get("marks");
  const [questionData, setQuestionData] = useState<Question[]>([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quiz, setQuiz] = useState<QuizAnswer[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `${url}/api/studentans/view/${email}/${course_code}`
      );
      const json = await response.json();
      if (response.ok) {
        const initialQuiz = json.results.map((e: any) => ({
          question_id: e.question_id,
          student_ans: e.studentAnswer,
          student_email: email,
          student_name: email,
          teacher_name: email,
          course_code: course_code,
        }));
        setQuiz(initialQuiz);
        setQuestionData(json.results);
        setQuestionCount(json.results.length);
      }
      setIsLoading(false);
    };
    fetchQuestions();
  }, [email, course_code]);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedQuiz = quiz.map((item, idx) =>
      idx === index ? { ...item, student_ans: value } : item
    );
    setQuiz(updatedQuiz);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen gap-y-6">
      <div className="shadow-xl rounded-lg bg-white md:w-1/2 text-xl font-bold space-y-4 p-4 text-center">
        <h1 className="text-green-800 uppercase">{email}</h1>
        <h1 className="text-red-700">Course Code: {course_code}</h1>
        <h1 className="text-red-700">Obtained Marks: {mark}</h1>
      </div>
      {questionData &&
        questionData.map((data, index) => {
          const options = [
            { key: "A", value: data.options.optionOne },
            { key: "B", value: data.options.optionTwo },
            { key: "C", value: data.options.optionThree },
            { key: "D", value: data.options.optionFour },
          ];

          return (
            <div
              key={index}
              className="shadow-xl rounded-lg bg-white md:w-1/2 text-xl font-bold space-y-4 p-4"
            >
              <div className="mb-4 space-y-4">
                <div className="flex gap-x-2 items-center">
                  <h1 className="text-lg text-blue-700 uppercase">
                    {index + 1}. {data.question}
                  </h1>
                </div>
                {options.map((option) => {
                  const isCorrect = data.correctAnswer === option.key;
                  const isSelected = quiz[index].student_ans === option.key;
                  const backgroundColor = isSelected
                    ? isCorrect
                      ? "bg-green-400"
                      : "bg-red-400"
                    : isCorrect
                    ? "bg-green-400"
                    : "";
                  return (
                    <div
                      key={option.key}
                      className={`flex gap-x-2 items-center font-medium ${backgroundColor}`}
                    >
                      <input
                        type="checkbox"
                        id={`option${option.key}-${index}`}
                        name={`student_ans-${index}`}
                        value={option.key}
                        onChange={(e) =>
                          handleAnswerChange(index, e.target.value)
                        }
                        checked={isSelected || isCorrect}
                      />
                      <label
                        htmlFor={`option${option.key}-${index}`}
                        className="text-sm"
                      >
                        {option.value}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
