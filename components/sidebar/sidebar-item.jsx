"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ Icon, label, route }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(route);
  return (
    <Link
      href={route}
      className={`h-10 mt-2 transition-colors duration-200 cursor-pointer flex items-center gap-2 px-3 ${
        isActive ? "bg-[#4caf50]" : "hover:bg-gray-50 hover:text-black"
      }  rounded-md`}
    >
      <Icon /> <span>{label}</span>
    </Link>
  );
};
export default SidebarItem;
