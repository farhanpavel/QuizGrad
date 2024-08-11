"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Teacherdashboard from "../page";
import { useRouter } from "next/navigation";
import { url } from "@/app/_components/Url/page";

interface resultData {
  student_name: string;
  student_email: string;
  course_code: string;
  marks: string;
}
export default function QuizResults() {
  const [results, setResults] = useState<resultData[]>([]);
  const [loading, setLoading] = useState(true);
  const teacherName = Cookies.get("name");
  Cookies.remove("email");
  Cookies.remove("marks");
  Cookies.remove("code");

  const router = useRouter();
  const submit = (email: string, code: string, mark: string) => {
    console.log(results);
    Cookies.set("email", email.toString());
    Cookies.set("code", code.toString());
    Cookies.set("marks", mark.toString());

    router.push(`/teacherdashboard/quizresultview`);
  };
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `${url}/api/studentans/results?teacher_name=${teacherName}`
        );

        if (response.ok) {
          const data = await response.json();
          setResults(data.results);
        } else {
          console.error("Failed to fetch results");
        }
      } catch (err) {
        console.error("Error fetching results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [teacherName]);

  if (loading) return <div>Loading...</div>;

  return (
    <Teacherdashboard>
      <div className="font-custom  mx-5 space-y-4">
        <div className="text-2xl mt-2 font-bold text-center">
          <h1>Quiz Result</h1>
        </div>
        <table className="lg:w-[140vh] md:min-w-[80vh] divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Marks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((result, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {result.student_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.student_email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.course_code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {result.marks}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() =>
                      submit(
                        result.student_email,
                        result.course_code,
                        result.marks
                      )
                    }
                    className="text-blue-600 hover:text-blue-900"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Teacherdashboard>
  );
}
