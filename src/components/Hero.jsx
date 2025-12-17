import React from 'react'
import {FaWind} from "react-icons/fa6";
import {BsCloudSun} from "react-icons/bs";
import {FaEye} from "react-icons/fa";
import {MdSpeed} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";
import {TbWind} from "react-icons/tb";
import {TbUvIndex} from "react-icons/tb";

const Stat = ({label, value}) => (
    <div className="flex flex-col items-center">
        <span className="text-sm opacity-80">{label}</span>
        <span className="font-semibold">{value}</span>
    </div>
);

const Divider = () => (
    <div className="h-8 w-[2px] bg-white/20"></div>
);
const InfoCard = ({icon, label, value}) => (
    <div className="bg-white shadow-lg rounded-2xl py-6 flex flex-col items-center gap-2">
        <div className="w-9 h-9 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <span className="text-sm">{label}</span>
        <span className="font-semibold">{value}</span>
    </div>
);

export const Hero = ({weatherData}) => {
    if (!weatherData) {
        return (
            <div className="text-white p-10">
                Loading weather...
            </div>
        );
    }
    const {
        temperature,
        humidity,
        windSpeed,
        pressure,
        visibility,
        location,
        icon,
    } = weatherData;


    return (
        <div className="w-full max-w-[70%] px-13 pb-10 mx-auto">
            <div className="flex gap-8 w-full">
                {/*Left Mani div*/}
                <div className="flex flex-col w-4/6 gap-2 pt-8">
                    <div
                        className=" w-full flex flex-col justify-start items-center text-center gap-4 rounded-3xl text-white shadow-xl bg-gradient-to-br from-[#6C5DD3] via-[#8676E8] to-[#6C5DD3] ">

                        <div
                            className="flex items-center justify-between py-4 rounded-3xl gap-2 w-[95%]  ">
                            <div className="flex justify-center items-center gap-2"><FaLocationDot/> {location}
                            </div>
                            <div
                                className="relative flex items-center justify-center gap-2 px-5 py-2 backdrop-blur-lg shadow-md bg-white/20 border-white/15 border-1 rounded-full ">
                                <span className="relative flex items-center size-2">
                                    <span
                                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-green-300"></span>
                                </span> Live update
                            </div>
                        </div>

                        <div className="w-[95%] flex items-center justify-between py-4 rounded-3xl px-4">
                            <div className="flex flex-col">
                                <div className="text-9xl font-tertiary ">{temperature}°</div>
                                <div className="text-xl">Clear sky</div>
                                <div className="opacity-80">Feels like {temperature}°</div>
                            </div>

                            <img
                                src={icon}
                                alt="weather"
                                className="w-42 h-42"
                            />
                        </div>

                        <div
                            className=" w-[95%] flex justify-around items-center rounded-3xl backdrop-blur-lg shadow-md bg-white/10 mb-2 py-6 rounded-b-3xl">
                            <Stat label="Wind" value={`${windSpeed} km/h`}/>
                            <Divider/>
                            <Stat label="Humidity" value={`${humidity}%`}/>
                            <Divider/>
                            <Stat label="Visibility" value={`${visibility / 1000} km`}/>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-4">
                        <InfoCard icon={<FaWind/>} label="Wind" value={`${windSpeed} km/h`}/>
                        <InfoCard icon={<BsCloudSun/>} label="Humidity" value={`${humidity}%`}/>
                        <InfoCard icon={<MdSpeed/>} label="Pressure" value={`${pressure} hPa`}/>
                        <InfoCard icon={<FaEye/>} label="Visibility" value={`${visibility / 1000} km`}/>
                        <InfoCard icon={<TbWind/>} label="AIR Quality" value={`${visibility / 1000} km`}/>
                        <InfoCard icon={<TbUvIndex/>} label="UV Index" value={`${visibility / 1000} km`}/>
                    </div>

                </div>

                {/* Right side div*/}
                <div className=" w-95 mt-8 py-2 px-2 space-y-6 rounded-3xl ">
                    <div
                        className="w-full max-w-md rounded-2xl p-6 bg-gradient-to-br from-[#6C5DD3] via-[#8676E8] to-[#6C5DD3] border border-white/10 shadow-xl shadow-indigo-900/40">

                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-white/90">
                                <span className="text-lg"><TbWind/></span>
                                <span className="font-medium">Air Quality</span>
                            </div>
                            <span
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">US AQI</span>
                        </div>

                        {/* AQI Value */}
                        <div className="flex items-end gap-3 mb-2">
                            <span className="text-4xl font-bold text-white">42</span>
                            <span className="text-green-400 font-semibold mb-1">Good</span>
                        </div>

                        <p className="text-sm text-white/60 mb-4">Perfect for outdoor activities.</p>

                        {/* Progress Bar */}
                        <div className="w-full h-3 rounded-full overflow-hidden bg-white/10">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400"
                                style={{width: "42%"}}/>
                        </div>
                    </div>


                    <div className="bg-white shadow-lg rounded-3xl px-2 space-y-2 py-2">
                        <div className=" py-4 ">7 Day Forecast</div>
                        <div
                            className="w-full flex justify-center items-center px-2 shadow-md bg-white rounded-3xl py-4 ">
                            <div className="px-2 py-2 bg-purple-400 rounded-full">log</div>
                            <div className="pr-50 pl-4">Day</div>
                            <div>Temp</div>
                        </div>
                        <div
                            className="w-full flex justify-center items-center px-2 shadow-md bg-white rounded-3xl py-4 ">
                            <div className="px-2 py-2 bg-purple-400 rounded-full">log</div>
                            <div className="pr-50 pl-4">Day</div>
                            <div>Temp</div>
                        </div>
                        <div
                            className="w-full flex justify-center items-center px-2 shadow-md bg-white rounded-3xl py-4 ">
                            <div className="px-2 py-2 bg-purple-400 rounded-full">log</div>
                            <div className="pr-50 pl-4">Day</div>
                            <div>Temp</div>
                        </div>
                        <div
                            className="w-full flex justify-center items-center px-2 shadow-md bg-white rounded-3xl py-4 ">
                            <div className="px-2 py-2 bg-purple-400 rounded-full">log</div>
                            <div className="pr-50 pl-4">Day</div>
                            <div>Temp</div>
                        </div>
                        <div
                            className="w-full flex justify-center items-center px-2 shadow-md bg-white rounded-3xl py-4 ">
                            <div className="px-2 py-2 bg-purple-400 rounded-full">log</div>
                            <div className="pr-50 pl-4">Day</div>
                            <div>Temp</div>
                        </div>
                        <div
                            className="w-full flex justify-center items-center px-2 shadow-md bg-white rounded-3xl py-4 ">
                            <div className="px-2 py-2 bg-purple-400 rounded-full">log</div>
                            <div className="pr-50 pl-4">Day</div>
                            <div>Temp</div>
                        </div>
                        <div
                            className="w-full flex justify-center items-center px-2 shadow-md bg-white rounded-3xl py-4 ">
                            <div className="px-2 py-2 bg-purple-400 rounded-full">log</div>
                            <div className="pr-50 pl-4">Day</div>
                            <div>Temp</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Current weather report div*/}
            <div className="w-full px-2 mt-10 bg-white/80 rounded-3xl ">
                <div
                    className="flex items-center justify-between py-2 rounded-3xl gap-2   ">
                    <div className="flex justify-center items-center text-2xl gap-2"> How's is the temprature Today
                    </div>
                    <div
                        className="flex items-center justify-center px-4 py-3 bg-zinc-400/30 border-white/15 border-1 rounded-full "> Live
                        update
                    </div>
                    <div
                        className="flex items-center justify-center px-4 py-3 bg-zinc-400/30 border-white/15 border-1 rounded-full "> Live
                        update
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-3xl py-30"> hello</div>
            </div>
        </div>
    )
}
