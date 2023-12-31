import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        A dynamic, energetic, enthusiastic, engineering student looking for
                        opportunities in an organization of repute to kick-start my career
                        by utilizing the knowledge, skills & abilities gained during my
                        academic tenure so far to attain organizational as well as
                        professional growth.
                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300 ">
                                <MdOutlineKeyboardArrowRight size={23}  className="ml-1"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    );
};

export default Home;
