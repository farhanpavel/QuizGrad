interface StudentFormProps {
  onClose: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 md:1/2 rounded">
        <div className="text-right text-2xl font-bold -mt-4">
          <button onClick={onClose}>&times;</button>
        </div>
        <h1 className="text-center text-lg font-bold">Create Student</h1>
        <form action="" className="mt-4 space-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Name:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Department:</label>
            <input
              type="name"
              className="border-[1px] border-[#C1BBBB] p-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password:</label>
            <input
              type="password"
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
export default StudentForm;
