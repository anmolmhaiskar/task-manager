import Image from "next/image";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-3xl font-semibold text-black">
            Good morning, Joe!
          </h1>
        </div>
        <div className=" text-black  flex items-center space-x-4 text-sm">
          Help & feedback
          <IoIosHelpCircleOutline className="m-2 size-5" />
        </div>
      </div>
      <div className="flex justify-around gap-2">
        <div className="flex bg-white rounded-md py-4">
          <Image
            src="/images/profile.jpg"
            className="w-16 h-16 rounded-lg self-center ml-2"
            alt=""
            width={30}
            height={30}
          />
          <div className="px-2">
            <p className="text-sm font-medium">Introducing tags</p>
            <p className="text-xs text-gray-500">
              Easily categorize and find your notes by adding tags. Keep your
              workspace clutter-free and efficient.
            </p>
          </div>
        </div>
        <div className="flex bg-white rounded-md py-4">
          <Image
            src="/images/profile.jpg"
            className="w-16 h-16 rounded-lg self-center ml-2"
            alt=""
            width={30}
            height={30}
          />
          <div className="px-2">
            <p className="text-sm font-medium">Share Notes Instantly</p>
            <p className="text-xs text-gray-500">
              Effortless share your with others via email or link. Enhance
              collaboration with quick sharing options.
            </p>
          </div>
        </div>
        <div className="flex bg-white rounded-md py-4">
          <Image
            src="/images/profile.jpg"
            className="w-16 h-16 rounded-lg self-center ml-2"
            alt=""
            width={30}
            height={30}
          />
          <div className="px-2">
            <p className="text-sm font-medium">Access Anywhere</p>
            <p className="text-xs text-gray-500">
              Sync your notes across all devices. Stay productive whether you
              &apost;re on your phone, tablet, or computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
