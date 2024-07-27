import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <div>
        <h1 className="text-xl font-semibold">Good morning, Joe!</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500">
          <FontAwesomeIcon icon={faSun} />
        </button>
        <button className="px-4 py-2 text-white bg-primary rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
