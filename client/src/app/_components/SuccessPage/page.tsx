import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/studentdashboard/pending");
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, [router]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-white p-10 lg:w-1/3 h-1/2 md:1/2 rounded flex flex-col justify-center">
        <div className="text-9xl m-auto">
          <FaCheckCircle className="text-blue-600" />
        </div>
        <div className="text-center text-xl mx-2">
          <h1>Submitted !!</h1>
        </div>
      </div>
    </div>
  );
};
export default SuccessPage;
