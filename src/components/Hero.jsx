import React from 'react'
import {FaWind} from "react-icons/fa6";
import {BsCloudSun} from "react-icons/bs";
import {FaEye} from "react-icons/fa";
import {MdSpeed} from "react-icons/md";

export const Hero = () => {
    return (
        <div className="w-full max-w-[70%] px-13 mx-auto bg-indigo-900/30 h-screen ">
            <div className="flex justify-between">
            <div className="flex w-4/6 gap-4 pt-8">

                <div
                    className=" w-full flex flex-col justify-start items-center text-center gap-4 rounded-3xl bg-white/20">

                    <div
                        className="flex items-center justify-between py-2 bg-gray-400/30 rounded-3xl mt-2 gap-2 w-[95%] px-4 ">
                        <div className="flex justify-center"> Location</div>
                        <div
                            className="flex items-center justify-center px-4 py-3 bg-gray-400/40 rounded-full "> Live
                            update
                        </div>
                    </div>

                    <div className="w-[95%] flex items-center justify-between py-8 rounded-3xl px-4 bg-gray-400/30">
                        <div className="flex flex-col">
                            <div className="text-9xl">70°F</div>
                            <div className="text-2xl pr-32">Clear sky</div>
                            <div className="pr-28">feel like 70F shit</div>
                        </div>

                        <div
                            className="  h-42 text-9xl flex items-center justify-center px-4 py-3 bg-gray-400/30 rounded-full "> ☀️
                        </div>
                    </div>

                    <div className=" w-[95%] flex items-center justify-around py-6 rounded-3xl bg-gray-400/30 mb-2">
                        <span>Weather</span>
                        <div className="h-8 w-[2px] bg-gray-300/30"></div>
                        <span>Weather</span>
                        <div className="h-8 w-[2px] bg-gray-300/30"></div>
                        <span>Weather</span>
                    </div>
                </div>
            </div>

            <div className=" w-92 flex gap-6 bg-white/20 rounded-3xl">
                <div
                    className=" h-42 w-full bg-gray-400/30 rounded-2xl flex flex-col items-center justify-center">
                    <div
                        className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center">
                        <FaEye/>
                    </div>
                    <span>Visibility</span>
                </div>
            </div>
            </div>

            <div
                className="md:w-4/6  flex flex-col mt-2 py-2 gap-6 px-2 justify-center items-center bg-white/20 rounded-3xl">
                <div className=" w-full flex items-center justify-between gap-6">
                    <div className=" h-42 w-full bg-gray-400/30 rounded-2xl flex flex-col justify-center items-center">
                        <div
                            className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center">
                            <FaWind/></div>
                        <span> Wind</span></div>
                    <div className=" h-42 w-full bg-gray-400/30 flex flex-col items-center justify-center rounded-2xl">
                        <div
                            className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center">
                            <BsCloudSun/></div>
                        <span> Humidity</span></div>
                    <div className=" h-42 w-full bg-gray-400/30 flex flex-col items-center justify-center rounded-2xl">
                        <div
                            className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center">
                            <BsCloudSun/></div>
                        <span> Humidity</span></div>
                </div>
                <div className=" w-full flex items-center justify-between gap-6">
                    <div className=" h-42 w-full bg-gray-400/30 rounded-2xl flex flex-col items-center justify-center">
                        <div
                            className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center">
                            <FaEye/>
                        </div>
                        <span>Visibility</span></div>
                    <div className=" h-42 w-full bg-gray-400/30 rounded-2xl flex flex-col items-center justify-center">
                        <div
                            className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center">
                            <MdSpeed/></div>
                        <span>Pressure</span></div>
                    <div className=" h-42 w-full bg-gray-400/30 flex flex-col items-center justify-center rounded-2xl">
                        <div
                            className="w-9 h-9 rounded-full bg-white/10 border-white/15 border-1 flex items-center justify-center">
                            <BsCloudSun/></div>
                        <span> Humidity</span></div>
                </div>
            </div>

        </div>
    )
}
