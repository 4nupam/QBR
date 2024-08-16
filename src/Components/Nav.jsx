import React from "react";
import { Link } from "react-router-dom"; // Correct import
import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="h-full flex rounded-md inset-0  md:flex-col justify-evenly items-center p-2 bg-slate-700 dark:bg-gray-400">
      <Link className="text-blue-600 font-medium text-2xl" to="/">
        <MdDashboard />
      </Link>
      <Link className="text-blue-600 font-medium text-2xl" to="/TaskPage">
        <FaTasks />
      </Link>
      <Link className="text-blue-600 font-medium text-2xl" to="/PeoplePage">
        <FaPeopleGroup />
      </Link>
      <Link className="text-blue-600 font-medium text-2xl" to="/ChartPage">
        <FaRegChartBar />
      </Link>
    </nav>
  );
};

export default Nav;