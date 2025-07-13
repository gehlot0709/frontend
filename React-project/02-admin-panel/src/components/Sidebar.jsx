import { IoIosHome, IoMdMap } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaWpforms, FaRegChartBar } from "react-icons/fa";
import { MdWidgets, MdTableChart, MdMenuBook } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="group fixed top-0 left-0 h-screen w-16 md:w-20 hover:w-64 bg-gray-900 text-white transition-all duration-300 overflow-hidden z-20 hidden sm:block">
      {/* Logo Section */}
      <div className="hidden group-hover:flex items-center justify-center h-16 border-b border-gray-800">
        <h2 className="text-xl font-semibold tracking-wide">Admin Panel</h2>
      </div>

      {/* Sidebar Items */}
      <nav className="mt-20 flex flex-col gap-6 px-4 text-xl">
        <SidebarItem icon={<IoIosHome />} label="Dashboard" />
        <SidebarItem icon={<AiFillAppstore />} label="Apps" />
        <SidebarItem icon={<FaWpforms />} label="Forms" />
        <SidebarItem icon={<IoMdMap />} label="Maps" />
        <SidebarItem icon={<MdWidgets />} label="Widgets" />
        <SidebarItem icon={<MdTableChart />} label="Tables" />
        <SidebarItem icon={<FaRegChartBar />} label="Charts" />
        <SidebarItem icon={<MdMenuBook />} label="Documentation" />
      </nav>
    </aside>
  );
};

// Reusable Component
const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-4 text-white cursor-pointer transition-colors duration-200 hover:text-blue-400">
    <div className="text-2xl">{icon}</div>
    <span className="hidden group-hover:inline text-base ">{label}</span>
  </div>
);

export default Sidebar;
