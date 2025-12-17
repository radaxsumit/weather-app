import React from 'react'
import {IoNotifications} from "react-icons/io5";
import {TbSettings2} from "react-icons/tb";
import {LuCircleUserRound} from "react-icons/lu";
import {IoIosSearch} from "react-icons/io";
import {RiCloudLine} from "react-icons/ri";

import {FiSearch, FiBell, FiSettings, FiUser} from "react-icons/fi";

export const Navbar = ({inputRef}) => {
    return (
        <nav
            className="w-full mx-auto h-18 px-12 sticky z-50 top-0 flex items-center bg-[#101326] justify-between border-white/20 border backdrop-blur-sm shadow-lg ">

            {/* Left: Logo / App name */}
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg">☁️</span>
                </div>
                <span className="text-white font-tertiary font-bold text-2xl ">
          Weather App
        </span>
            </div>

            {/* Center: Search */}
            <div className=" flex items-center gap-8 ">
            <div className="bg-white backdrop-blur-md gap-1 border-gray-700/30 border-1 px-5 py-3 rounded-full w-[320px] flex">
                <FiSearch size={22} className="text-gray-800/50 "/>
                <input
                    type="text"
                    ref={inputRef}
                    onClick={() => search(inputRef,current.value)}
                    placeholder="Search city..."
                    className="bg-transparent outline-none text-sm placeholder:text-gray-800/50 w-full"
                />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <button type="submit" className="w-9 h-9 rounded-full bg-purple-600/80 shadow-[0_0_12px_rgba(168,85,247,0.8)] flex items-center justify-center"><LuCircleUserRound size={22} className="text-white"/></button>
            </div>
            </div>
        </nav>
    )
}





