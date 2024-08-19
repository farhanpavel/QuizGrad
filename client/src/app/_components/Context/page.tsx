"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface UserData {
  name: string;
  email: string;
}
interface CourseData {
  course_name: string;
  course_code: string;
}
interface QuizData {
  question: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour: string;
  ans: string;
  question_id: string;
}
interface AssignStudent {
  student_email: string;
}
interface AppContextType {
  userData: UserData[];
  setUserData: Dispatch<SetStateAction<UserData[]>>;
  courseData: CourseData[];
  setcourseData: Dispatch<SetStateAction<CourseData[]>>;
  quizData: QuizData[];
  setquizData: Dispatch<SetStateAction<QuizData[]>>;
  assignData: AssignStudent[];
  setassignData: Dispatch<SetStateAction<AssignStudent[]>>;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [courseData, setcourseData] = useState<CourseData[]>([]);
  const [quizData, setquizData] = useState<QuizData[]>([]);
  const [assignData, setassignData] = useState<AssignStudent[]>([]);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        courseData,
        setcourseData,
        quizData,
        setquizData,
        assignData,
        setassignData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}
