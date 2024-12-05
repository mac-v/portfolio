import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div
      id="about-me"
      className=" flex justify-center  text-customWhite87 mb-6 lg:mb-8 lg:mb-16"
    >
      <div className="flex flex-col justify-center items-center gap-3 w-full max-w-m mx-5 lg:gap-5 md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
        {/* Avatar */}
        <div className="relative flex items-center justify-center group">
          {/* Ring Effect */}
          <div
            className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-72 xl:h-72 rounded-full
                        bg-[radial-gradient(circle,_rgba(3,218,198,1)_0%,_rgba(3,218,198,0.5)_50%,_rgba(0,0,0,0)_90%)]

                        blur-2xl transition-opacity duration-500 opacity-60 group-hover:opacity-90"
          ></div>

          {/* Image */}
          <div className="relative rounded-full overflow-hidden  shadow-xl">
            <img
              src="/images/avatar.png"
              alt="Avatar"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-72 xl:h-72"
            />
          </div>
        </div>

        {/* Greetings */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl  xl:text-6xl  font-bold self-start">
          Hi<span className="wave">👋</span>
          <br />
          I'm <span className="animate-pulse">Maciej</span>
        </h1>

        {/* Description */}
        <p className="text-m  md:text-base lg:text-xl xl:text-2xl text-customWhite67 leading-relaxed  self-start max-w">
          Data professional with a strong focus on backend development and a
          growing interest in full-stack projects. I'm passionate about data
          engineering, cloud technologies, and continuously expanding my skill
          set. Currently diving deep into Azure, Databricks, and Spark to build
          scalable, data-driven solutions
        </p>

        {/* Footer */}
        <div className="flex flex-col gap-2 border-t-2 pt-2 border-customLightGreen67 sm:flex-row items-center justify-between w-full">
          {/* Status */}
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm md:text-base text-gray-300">
              Open to work
            </span>
          </div>

          {/* Icons */}
          <div className="flex gap-6 text-2xl md:text-3xl">
            <a
              href="https://github.com/mac.v"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
