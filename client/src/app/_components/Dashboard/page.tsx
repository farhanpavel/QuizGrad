import Link from "next/link";

import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaHome } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { FiAlignJustify } from "react-icons/fi";
import { usePathname } from "next/navigation";
export default function Dashboard() {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className=" border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/admindashboard/home"
                className={`flex mt-4 items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathname === "/admindashboard/home" ? "bg-muted " : ""
                }`}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/admindashboard/create-teacher"
                className={`flex  items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathname === "/admindashboard/create-teacher"
                    ? "bg-muted "
                    : ""
                }`}
              >
                <FaChalkboardTeacher className="h-4 w-4" />
                Create Teacher
              </Link>
              <Link
                href="/admindashboard/create-student"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathname === "/admindashboard/create-student"
                    ? "bg-muted "
                    : ""
                }`}
              >
                <PiStudent className="h-4 w-4" />
                Student List
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
