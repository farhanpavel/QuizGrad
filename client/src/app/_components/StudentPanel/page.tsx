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
import { FaQuestionCircle } from "react-icons/fa";
import { FaCreativeCommonsPdAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
export default function Dashboard() {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/studentdashboard/home"
                className={`flex mt-4 items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathname === "/studentdashboard/home" ? "bg-muted " : ""
                }`}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/studentdashboard/pending"
                className={`flex  items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                  pathname === "/studentdashboard/pending" ? "bg-muted " : ""
                }`}
              >
                <FaCreativeCommonsPdAlt className="h-4 w-4" />
                Pending
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
