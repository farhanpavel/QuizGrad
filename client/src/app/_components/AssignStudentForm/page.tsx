import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";

interface QuizFormProps {
  onClose: () => void;
}

const AssignForm: React.FC<QuizFormProps> = ({ onClose }) => {
  const [quiz, setQuiz] = useState({
    students: [] as { id: string; email: string }[], // Array to store selected student objects
  });
  const [studentSuggestions, setStudentSuggestions] = useState<
    { _id: string; email: string }[]
  >([]);
  const [studentNameInput, setStudentNameInput] = useState("");
  const teacherName = Cookies.get("name");
  const courseCode = Cookies.get("code");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const student of quiz.students) {
      try {
        const response = await fetch(
          "https://quizgrad-server-11zr.onrender.com/api/assignstudent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              student_email: student.email,
              teacher_name: teacherName,
              course_code: courseCode,
              active: 0,
            }),
          }
        );

        if (!response.ok) {
          alert("Server Error");
          throw new Error("Failed to submit data");
        }
      } catch (err) {
        console.error("Error submitting data:", err);
        alert(`Error submitting data for student ${student.email}`);
      }
    }

    alert("Assigned successfully.");
    onClose();
  };
  const handleStudentNameInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStudentNameInput(e.target.value);
    if (e.target.value.length > 0) {
      try {
        const response = await fetch(
          `https://quizgrad-server-11zr.onrender.com/api/student?email=${e.target.value}`
        );
        if (response.ok) {
          const suggestions = await response.json();
          setStudentSuggestions(suggestions);
        }
      } catch (error) {
        console.error("Error fetching student suggestions:", error);
      }
    } else {
      setStudentSuggestions([]);
    }
  };

  const handleStudentSelection = (student: { _id: string; email: string }) => {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      students: [
        ...prevQuiz.students,
        { id: student._id, email: student.email },
      ],
    }));
    setStudentNameInput("");
    setStudentSuggestions([]);
  };

  const handleStudentRemoval = (id: string) => {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      students: prevQuiz.students.filter((student) => student.id !== id),
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 md:w-1/2 rounded">
        <div className="text-right text-2xl font-bold -mt-4">
          <button onClick={onClose}>&times;</button>
        </div>
        <h1 className="text-center text-lg font-bold">Assign Student</h1>
        <form action="" className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Add Students:</label>
            <input
              type="text"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              value={studentNameInput}
              onChange={handleStudentNameInputChange}
              placeholder="Type a student's email"
            />
            {studentSuggestions.length > 0 && (
              <ul className="border border-gray-300 mt-2">
                {studentSuggestions.map((suggestion) => (
                  <li
                    key={suggestion._id}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleStudentSelection(suggestion)}
                  >
                    {suggestion.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {quiz.students.map((student) => (
              <div
                key={student.id}
                className="flex items-center bg-gray-200 p-2 rounded-lg"
              >
                <span className="mr-2">{student.email}</span>
                <button
                  type="button"
                  onClick={() => handleStudentRemoval(student.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#FCC822] py-1 px-4 font-custom rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignForm;
