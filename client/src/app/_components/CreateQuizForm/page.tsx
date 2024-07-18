interface QuizFormProps {
  onClose: () => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 md:1/2 rounded">
        <div className="text-right text-2xl font-bold -mt-4">
          <button onClick={onClose}>&times;</button>
        </div>
        <h1 className="text-center text-lg font-bold">Create Quiz</h1>
        <form action="" className="mt-4 space-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Course Title:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Course Code:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Time:</label>
            <input
              type="number"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Question:</label>
            <textarea
              name=""
              id=""
              rows={5}
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <input type="checkbox" id="option1" />
              <label htmlFor="option1" className="ml-2">
                Option 1:
              </label>
            </div>
            <input
              type="text"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <input type="checkbox" id="option2" />
              <label htmlFor="option2" className="ml-2">
                Option 2:
              </label>
            </div>
            <input
              type="text"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <input type="checkbox" id="option3" />
              <label htmlFor="option3" className="ml-2">
                Option 3:
              </label>
            </div>
            <input
              type="text"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <input type="checkbox" id="option4" />
              <label htmlFor="option4" className="ml-2">
                Option 4:
              </label>
            </div>
            <input
              type="text"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>

          <div className="text-center mt-10">
            <button className="bg-[#FCC822] py-1 px-4 font-custom  rounded text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default QuizForm;
