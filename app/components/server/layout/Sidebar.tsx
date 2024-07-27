import {
  faChartBar,
  faClipboardList,
  faCog,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white shadow-lg">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/40"
            alt="User Avatar"
          />
          <span className="font-semibold">Joe Gardner</span>
        </div>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-200">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
            Boards
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Teams
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            Analytics
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 p-4">
        <button className="w-full px-4 py-2 text-white bg-primary rounded">
          Create new task +
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
