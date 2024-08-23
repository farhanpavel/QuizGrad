import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../_components/Header/page";
import { AiFillProduct } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineAlert } from "react-icons/ai";

import { AiOutlineApi } from "react-icons/ai";
import Footer from "../_components/Footer/page";
export default function Home() {
  return (
    <div className="bg-[#f7f7f3] ">
      <Header />
      {/* Hero Section */}
      <div className=" relative min-h-screen flex justify-around items-center flex-wrap md:flex-nowrap">
        <div className=" md:order-last flex flex-col justify-center ">
          <Image
            src="/images/Online test(1).gif"
            width={500}
            height={400}
            alt="hero"
            className="lg:w-[500px] sm:w-[450px] md:w-[400px] bg-[rgb(247,247,243)]"
          />
        </div>
        <div className="flex flex-col flex-wrap   gap-10  mt-10  md:mt-0">
          <div className="space-y-6 ">
            <h1 className="text-5xl font-bold  leading-[3.4rem] font-sansSerif text-[#4a4a4a]">
              Learn new
              <br />
              concepts for
              <br /> each question
            </h1>
            <p className="font-rubik text-xl text-left leading-[2rem] text-[#4a4a4a]">
              Welcome to QuizGrad, your online
              <br />
              quiz taker where you can take exams
              <br />
              with ease. Enjoy an interactive exam
              <br />
              environment with 0% cheating. Begin your
              <br />
              journey to academic excellence.
            </p>
          </div>

          <div className="space-x-3">
            <button className="px-6 font-rubik py-2 rounded-lg bg-[#FCC822] text-white">
              Learn More
            </button>
            <button>
              <Link
                href={"/signup"}
                className="font-rubik px-6 py-2 border-[1px] rounded-lg border-[#FCC822] text-[#FCC822]"
              >
                Sign up
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10 " id="benefits">
        <div className="font-rubik text-center text-xl   text-[#4a4a4a] uppercase">
          <p className="text-[#FCC822]">Benefits</p>
        </div>
        <div className="font-sansSerif text-center text-5xl  mt-5 font-medium text-[#4a4a4a] ">
          <h1>
            Unlock Your Exam Success with
            <br /> QuizGrad
          </h1>
        </div>
        <div className="mt-8">
          <p className="font-rubik text-center text-lg  text-[#4a4a4a] md:w-full ">
            QuizGrad is a powerful digital platform that revolutionizes the way
            exams are conducted. With features
            <br /> like quiz creation, student management, exam tracking, and
            strict cheating prevention, QuizGrad <br />
            empowers teachers to create and manage exams while ensuring students
            have a fair and secure testing experience.
          </p>
        </div>
        <div className="mt-10 ">
          <div className="w-full md:flex  md:justify-center md:items-center  gap-24 ">
            <div>
              <Image
                src="/images/oversight.gif"
                width={500}
                height={400}
                alt="hero"
                className="lg:w-[500px] sm:w-[450px]   mx-auto bg-[rgb(247,247,243)] flex justify-center"
              />
            </div>

            <div className="grid grid-cols-[auto,1fr] gap-x-6 items-start md:w-1/3 lg:w-1/2">
              {/* Benefit 1 */}
              <div className="h-full grid grid-cols-1 grid-rows-[max(44px),1fr]">
                <div className="h-[44px] w-[44px]  rounded-full border-2 border-dotted border-[#FFC727] flex justify-center items-center">
                  <AiOutlineBulb className="h-6 w-6  text-[#FFC727]  stroke-[50]" />
                </div>
                <div className="h-full flex justify-center">
                  <div className="w-1 h-full border-l-2 border-dotted border-[#FFC727]"></div>
                </div>
              </div>
              <div className="mb-12 last:mb-0 mt-1">
                <h2 className="mb-4 font-sansSerif text-3xl  font-semibold text-[#4a4a4a]">
                  Elevate Your Exam Preparation
                </h2>
                <p className="text-large font-rubik  text-[#4a4a4a]">
                  QuizGrad provides you with the tools and resources needed to
                  excel in your exams. With features like customized quizzes,
                  student management, and comprehensive exam tracking, Quizy
                  ensures a secure and efficient exam experience for both
                  teachers and students.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="h-full grid grid-cols-1 grid-rows-[max(44px),1fr]">
                <div className="h-[44px] w-[44px]  rounded-full border-2 border-dotted border-[#FFC727] flex justify-center items-center">
                  <AiOutlineSun className="h-6 w-6   text-[#FFC727]  stroke-[50] " />
                </div>
                <div className="h-full flex justify-center">
                  <div className="w-1 h-full border-l-2 border-dotted border-[#FFC727]"></div>
                </div>
              </div>
              <div className="mb-12 last:mb-0 mt-1">
                <h2 className="mb-4 font-sansSerif text-3xl  font-semibold text-[#4a4a4a]">
                  Monitor Your Exam Performance
                </h2>
                <p className="text-large font-rubik  text-[#4a4a4a]">
                  With QuizGrad, you can easily track your exam performance and
                  see your progress. Our performance tracking feature helps you
                  monitor results, identify strengths and weaknesses, and focus
                  on areas needing improvement.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="h-full grid grid-cols-1 grid-rows-[max(44px),1fr]">
                <div className="h-[44px] w-[44px]  rounded-full border-2 border-dotted border-[#FFC727] font-bold flex justify-center items-center">
                  <AiOutlineThunderbolt className="h-6 w-6   text-[#FFC727] stroke-[50] " />
                </div>
                <div className="h-full flex justify-center">
                  <div className="w-1 h-full border-l-2 border-dotted border-[#FFC727]"></div>
                </div>
              </div>
              <div className="mb-12 last:mb-0">
                <h2 className="mb-4 font-sansSerif text-3xl  font-semibold text-[#4a4a4a]">
                  Effortless QuizGrad Integration
                </h2>
                <p className="text-large font-rubik  text-[#4a4a4a]">
                  QuizGrad integrates seamlessly with your existing systems,
                  simplifying the process of managing quizzes and students. This
                  integration ensures that teachers and students have access to
                  the latest quizzes and exam resources without any hassle.
                </p>
              </div>
            </div>
          </div>

          <div className="h-full grid grid-cols-1 grid-rows-[max(44px),1fr]"></div>
        </div>
      </div>
      <div className="mt-10 " id="feature">
        <div className="font-rubik text-center text-xl   text-[#4a4a4a] uppercase">
          <p className="text-[#FCC822]">Unlock Your Potential</p>
        </div>
        <div className="font-sansSerif text-center text-5xl  mt-5 w-[70%] mx-auto font-medium text-[#4a4a4a] ">
          <h1>Elevate Your Exam Preparation with QuizyGrad Features</h1>
        </div>
        <div className="mt-8">
          <p className="font-rubik text-center text-lg  text-[#4a4a4a] w-[75%] mx-auto ">
            QuizGrad offers a range of powerful features to optimize your exam
            experience. From creating quizzes to tracking your performance,
            QuizGrad has everything you need for effective and secure exam
            preparation.
          </p>
        </div>
        <div className="lg:flex lg:flex-wrap space-y-4 lg:space-y-0 justify-evenly  mt-28">
          <div className=" lg:w-1/4 flex flex-col text-center gap-y-5">
            <div>
              <AiFillProduct className="text-5xl  mx-auto p-3 stroke-[30] bg-[#eceddd] text-[#FFC727] rounded-full" />
            </div>
            <div className="text-3xl  font-semibold text-[#4a4a4a] font-sansSerif">
              <h1>Create an Exam Plan</h1>
            </div>
            <div className="mt-4">
              <p className="text-center text-large  font-rubik text-[#4a4a4a]">
                Users input subjects, exam dates, and study durations. QuizGrad
                generates a personalized exam preparation plan.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 flex flex-col text-center gap-y-5">
            <div>
              <AiOutlineAlert className="text-5xl  mx-auto p-3 stroke-[30] bg-[#eceddd] text-[#FFC727] rounded-full" />
            </div>
            <div className="text-3xl  font-semibold text-[#4a4a4a] font-sansSerif">
              <h1>Design Your Exam Plan</h1>
            </div>
            <div className="mt-4">
              <p className="text-center text-large  font-rubik text-[#4a4a4a]">
                Enter subjects, exam schedules, and preparation times. QuizGrad
                will create a customized exam plan for you.
              </p>
            </div>
          </div>
          <div className=" lg:w-1/4 flex flex-col  gap-y-5">
            <div>
              <AiOutlineApi className="text-5xl  p-3 mx-auto stroke-[30] bg-[#eceddd] text-[#FFC727] rounded-full" />
            </div>
            <div className="text-3xl  font-semibold text-center text-[#4a4a4a] font-sansSerif">
              <h1>No Cheating Guarantee</h1>
            </div>
            <div className="mt-4">
              <p className="text-center text-large  font-rubik text-[#4a4a4a]">
                QuizGrad ensures that the study process remains fair and secure,
                with a focus on academic integrity and fair System.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-[#fce6b5] rounded-xl p-14 w-[90%] mx-auto">
        <div className="text-center  space-y-6">
          <div>
            <h1 className="text-3xl   font-semibold text-[#4a4a4a] font-sansSerif">
              Unlock Your Exam Potential with QuizGrad Today
            </h1>
          </div>
          <div>
            <p className="text-lg font-rubik text-[#4a4a4a]">
              QuizGrad is the ultimate exam companion, offering robust features
              to enhance your testing experience and ensure a secure, efficient
              process.
            </p>
          </div>
          <div>
            <button className="px-8 py-4 rounded-lg bg-[#FCC822] text-white font-semibold">
              <Link href={"/signup"} className="font-rubik">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
