"use client";
import Image from "next/image";
import { FaWpforms, FaPeopleGroup } from "react-icons/fa";
import { BsPeopleFill, BsBookmarkCheckFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import SidebarItem from "./sidebar-item";
import Link from "next/link";

const index = () => {
  return (
    <div className="text-white flex flex-col h-full justify-between px-3 py-4">
      <div>
        <Link
          href="/"
          className=" flex items-center gap-3 border-b border-gray-400 py-3 mb-2"
        >
          <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
            <Image
              width={25}
              height={25}
              src="/images/logo.png"
              alt="logo.png"
            />{" "}
          </div>
          <span>Guru Kripa Institution</span>
        </Link>
        <div>
          <SidebarItem
            Icon={FaWpforms}
            label="Admission Form"
            route="admission-form"
          />
          <SidebarItem Icon={IoMdContacts} label="Students" route="students" />
          <SidebarItem Icon={BsPeopleFill} label="Staff" route="staff" />
          <SidebarItem
            Icon={BsBookmarkCheckFill}
            label="Attandance"
            route="attandance"
          />
          <SidebarItem
            Icon={BiSolidContact}
            label="Contact us"
            route="contact-us"
          />
        </div>
      </div>
      <div>Bottom</div>
    </div>
  );
};
export default index;
