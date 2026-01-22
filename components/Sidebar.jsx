"use client";
import {
  Bell,
  DollarSign,
  Home,
  Info,
  Mail,
  Menu,
  Settings,
  ShoppingCart,
  SquareChartGantt,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sideBarItems = [
  { icon: Home, title: "Overview" },
  { icon: SquareChartGantt, title: "Products" },
  { icon: UsersRound, title: "Users" },
  { icon: DollarSign, title: "Sales" },
  { icon: ShoppingCart, title: "Orders" },
  { icon: Settings, title: "Settings" },
  { icon: Mail, title: "Messages" },
  { icon: Bell, title: "Notifications" },
  { icon: Info, title: "Help" },
];

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={`bg-(--background-secondary) flex flex-col justify-start items-start p-4 overflow-hidden transition-all duration-300 ${
        isSidebarOpen ? "w-70" : "w-20"
      }`}
    >
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="mb-4 ml-2 hover:bg-(--background-secondary-hover) cursor-pointer rounded-full w-8 h-8 flex items-center justify-center"
      >
        <Menu size={24} />
      </button>
      <nav className="space-y-4 w-full">
        {sideBarItems.map((item, index) => (
          <Link
            key={index}
            href={item.title.toLowerCase()}
            className={`flex items-center justify-start space-x-2 hover:bg-(--background-secondary-hover) px-2 py-3 rounded-lg ${
              pathname === `/${item.title.toLowerCase()}` ? "bg-(--background-secondary-hover)" : ""
            }`}
          >
            <span className="w-8 h-8 flex items-center justify-center">
              <item.icon size={24} color="var(--primary-green)" />
            </span>
            {isSidebarOpen && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
