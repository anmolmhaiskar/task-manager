import Image from "next/image";
import { BiGroup } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { CiViewBoard } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { RxDoubleArrowRight } from "react-icons/rx";
import { SlSettings } from "react-icons/sl";
import { TfiDownload } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div className="w-50 h-full bg-white shadow-lg text-sm">
      <div className="mx-2 h-screen flex flex-col justify-between">
        <div>
          <div className="py-2">
            <div className="flex items-center space-x-2">
              <Image
                className="w-8 h-8 rounded-lg"
                src="/images/profile.jpg"
                alt="User Avatar"
                width={50}
                height={50}
              />
              <span className="font-semibold">Joe Gardner</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <LuBellDot className="mr-3 size-4" />
              <IoSunnyOutline className="mr-3 size-4" />
              <RxDoubleArrowRight className="mr-3 size-4" />
            </div>
            <button className="bg-gray-100 p-2 rounded text-xs text-gray-500">
              Logout
            </button>
          </div>
          <nav className="mt-1">
            <div className="flex flex-col">
              <div className="rounded-sm hover:bg-gray-100 hover:border-2">
                <button className="flex items-center p-1  w-full text-left">
                  <RiHome2Line className="mr-3 size-4 text-gray-400" />
                  Home
                </button>
              </div>
              <div className="rounded-sm hover:bg-gray-100 hover:border-2">
                <button className="flex items-center p-1 w-full text-left">
                  <CiViewBoard className="mr-3 size-4 text-gray-500" />
                  Boards
                </button>
              </div>
              <div className="rounded-sm hover:bg-gray-100 hover:border-2">
                <button className="flex items-center p-1 w-full text-left">
                  <SlSettings className="mr-3 size-4 text-gray-500" />
                  Settings
                </button>
              </div>
              <div className="rounded-sm hover:bg-gray-100 hover:border-2">
                <button className="flex items-center p-1 w-full text-left">
                  <BiGroup className="mr-3 size-4 text-gray-500" />
                  Teams
                </button>
              </div>
              <div className="rounded-sm hover:bg-gray-100 hover:border-2">
                <button className="flex items-center p-1 w-full text-left">
                  <BsGraphUp className="mr-3 size-4 text-gray-500" />
                  Analytics
                </button>
              </div>
            </div>
          </nav>
          <div className="mt-2 text-center m-1">
            <button className="font-medium w-full px-3 p-2 text-white bg-indigo-800 rounded-md">
              Create new task{" "}
              <span className="bg-white rounded-full ml-1 px-1 text-gray-700">
                +
              </span>
            </button>
          </div>
        </div>
        <div className="bg-gray-100 flex rounded-md px-3 py-1 mb-6">
          <div className="mr-3 self-center">
            <TfiDownload className="size-5" />
          </div>
          <div>
            <p>Download the app</p>
            <p className="text-xs">Get the full experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
