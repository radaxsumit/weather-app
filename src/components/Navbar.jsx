import React from 'react'
import {IoNotifications} from "react-icons/io5";
import {TbSettings2} from "react-icons/tb";
import {LuCircleUserRound} from "react-icons/lu";
import {IoIosSearch} from "react-icons/io";
import {RiCloudLine} from "react-icons/ri";

import {FiSearch, FiBell, FiSettings, FiUser} from "react-icons/fi";

export const Navbar = () => {
    return (
        <nav
            className="w-full h-18 px-12 sticky z-50 top-0 flex items-center justify-between bg-[#121529] border-b border-white/5">

            {/* Left: Logo / App name */}
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg">☁️</span>
                </div>
                <span className="text-white font-Manrope font-bold text-2xl ">
          Weather App
        </span>
            </div>

            {/* Center: Search */}
            <div className=" flex items-center gap-8 ">
            <div className="bg-white/5 backdrop-blur-md gap-1 border-white/15 border-1 px-5 py-3 rounded-full w-[320px] flex">
                <FiSearch size={22} className="text-white/50 "/>
                <input
                    type="text"
                    placeholder="Search city..."
                    className="bg-transparent outline-none text-sm text-white placeholder:text-white/40 w-full"
                />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                <button type="submit" className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center "><IoNotifications size={20} className="text-white"/></button>
                <button type="submit" className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center"><TbSettings2 size={20} className="text-white"/></button>
                <button type="submit" className="w-9 h-9 rounded-full bg-purple-600/80 shadow-[0_0_12px_rgba(168,85,247,0.8)] flex items-center justify-center"><LuCircleUserRound size={22} className="text-white"/></button>
            </div>
            </div>
        </nav>
    )
}





