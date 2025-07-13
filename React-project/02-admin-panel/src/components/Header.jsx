
import { MdForwardToInbox, MdNotifications, MdDehaze } from "react-icons/md";
import Messagedropdown from "./Messagedropdown";
import { useState } from "react";
import UserInfo from "./UserInfo";
import SearchBox from "./SearchBox";

const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <header className="bg-white shadow-lg fixed left-0 right-0 top-0 z-30">
      <div className="max-w-[1320px] mx-auto px-4 py-3 flex justify-between items-center">
        <SearchBox />
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-4 text-xl text-gray-600">
            <li
              tabIndex={0}
              className="relative"
              onFocus={() => setDropdownActive(true)}
              onBlur={() => setDropdownActive(false)}
            >
              <MdForwardToInbox className="hover:text-blue-500 cursor-pointer relative" />
              {dropdownActive && <Messagedropdown />}
            </li>
            <li className="relative">
              <MdNotifications className="hover:text-blue-500 cursor-pointer" />
              <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                4
              </span>
            </li>
            <li>
              <MdDehaze className="hover:text-blue-500 cursor-pointer" />
            </li>
          </ul>
          <UserInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;