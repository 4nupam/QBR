import React,{useState} from 'react'
import { FaRegUser } from "react-icons/fa";
import { SiDarkreader } from "react-icons/si";
import { SiLighthouse } from "react-icons/si";

const Header = () => {
   
        const [isDarkMode, setIsDarkMode] = useState(false);
      
        const darkToggle = () => {
          setIsDarkMode(!isDarkMode);
          document.documentElement.classList.toggle("dark");
        };
  return (
    <div>
         {/* Header Part */}
         <div className="header flex items-center justify-between p-2 ml-2 mr-2">
          <span className="flex items-center gap-2 p-3 bg-blue-600 rounded-lg font-medium  dark:bg-white">
            {" "}
            <FaRegUser /> Hello{" "}
          </span>
          <button
            className="p-3 bg-blue-600 rounded-lg font-medium  dark:bg-white"
            onClick={darkToggle}
          >
            {isDarkMode ? <SiLighthouse /> : <SiDarkreader />}
          </button>
        </div>
    </div>
  )
}

export default Header