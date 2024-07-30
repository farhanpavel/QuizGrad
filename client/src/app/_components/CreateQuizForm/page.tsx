import { useState } from "react";
import Cookies from "js-cookie";
import QuizMain from "@/app/teacherdashboard/create-quiz-main/page";

interface QuizFormProps {
  onClose: () => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ onClose }) => {
  const teacherName = Cookies.get("name");
  const [quiz, setQuiz] = useState({
    teacher_name: teacherName,
    course_name: "",
    course_code: "",
    time: 0,
  });
  const { teacher_name, course_name, course_code, time } = quiz;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quiz),
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 md:1/2 rounded">
        <div className="text-right text-2xl font-bold -mt-4">
          <button onClick={onClose}>&times;</button>
        </div>
        <h1 className="text-center text-lg font-bold">Create Course</h1>
        <form action="" className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Course Title:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="course_name"
              value={course_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Course Code:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="course_code"
              value={course_code}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Time:</label>
            <input
              type="number"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              name="time"
              value={time}
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
export default QuizForm;
