import { useState } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { url } from "../Url/page";
interface QuizFormProps {
  onClose: () => void;
}

const QuizAddingForm: React.FC<QuizFormProps> = ({ onClose }) => {
  const teacherName = Cookies.get("name");
  const courseCode = Cookies.get("code");

  const [quiz, setQuiz] = useState({
    teacher_name: teacherName,
    course_id: courseCode,
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    ans: "",
  });
  const {
    teacher_name,
    course_id,
    question,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    ans,
  } = quiz;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({ ...quiz, ans: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const questionId = uuidv4();
    const quizData = {
      ...quiz,
      question_id: questionId,
    };
    console.log(quizData);
    try {
      const response = await fetch(`${url}/api/question`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
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
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 md:1/2 rounded">
        <div className="text-right text-2xl font-bold -mt-4">
          <button onClick={onClose}>&times;</button>
        </div>
        <h1 className="text-center text-lg font-bold">Create Quiz</h1>
        <form action="" className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="question">Question:</label>
            <textarea
              name="question"
              id="question"
              rows={5}
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              onChange={handleChange}
              value={question}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option1"
                name="ans"
                value="A"
                checked={ans === "A"}
                onChange={handleAnswerChange}
              />
              <label htmlFor="option1" className="ml-2">
                Option 1:
              </label>
            </div>
            <input
              type="text"
              name="optionOne"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              onChange={handleChange}
              value={optionOne}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option2"
                name="ans"
                value="B"
                checked={ans === "B"}
                onChange={handleAnswerChange}
              />
              <label htmlFor="option2" className="ml-2">
                Option 2:
              </label>
            </div>
            <input
              type="text"
              name="optionTwo"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              onChange={handleChange}
              value={optionTwo}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option3"
                name="ans"
                value="C"
                checked={ans === "C"}
                onChange={handleAnswerChange}
              />
              <label htmlFor="option3" className="ml-2">
                Option 3:
              </label>
            </div>
            <input
              type="text"
              name="optionThree"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              onChange={handleChange}
              value={optionThree}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="option4"
                name="ans"
                value="D"
                checked={ans === "D"}
                onChange={handleAnswerChange}
              />
              <label htmlFor="option4" className="ml-2">
                Option 4:
              </label>
            </div>
            <input
              type="text"
              name="optionFour"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
              onChange={handleChange}
              value={optionFour}
            />
          </div>

          <div className="text-center mt-5">
            <button
              type="submit"
              className="bg-black py-1 px-4 font-custom text-sm  rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizAddingForm;
