import Image from 'next/image';
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

const HeroSection = () => {
    return (
        <div
            id="about-me"
            className="flex justify-center text-custom-white-87 mb-6 lg:mb-8 lg:mb-16"
        >
            <div
                className="flex flex-col justify-center items-center gap-3 w-full max-w-m mx-5 lg:gap-5 md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
                {/* Avatar */}
                <div className="relative flex items-center justify-center group">
                    {/* Ring Effect */}
                    <div
                        className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-72 xl:h-72 rounded-full
                        bg-[radial-gradient(circle,_rgba(3,218,198,1)_0%,_rgba(3,218,198,0.5)_50%,_rgba(0,0,0,0)_90%)]

                        blur-2xl transition-opacity duration-500 opacity-60 group-hover:opacity-90"
                    ></div>

                    {/* Image */}
                    <div
                        className="relative rounded-full overflow-hidden shadow-xl w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 ">
                        <Image
                            src="/images/avatar.png"
                            alt="Avatar"
                            fill
                            className="object-cover rounded-full "
                        />
                    </div>
                </div>

                {/* Greetings */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold self-start">
                    Hi<span className="wave">👋</span>
                    <br/>
                    I&#39;m <span className="animate-pulse">Maciej</span>
                </h1>

                {/* Description */}
                <p className="text-m md:text-base lg:text-xl xl:text-2xl text-customWhite67 leading-relaxed self-start max-w">
                    Software developer enthusiast with a keen interest in data and cloud technologies.
                    I enjoy exploring new ways to create scalable, data-driven solutions and continuously expanding my
                    knowledge in these areas.
                </p>

                {/* Footer */}
                <div
                    className="flex flex-col gap-2 border-t-1 pt-2 border-customLightGreen67 sm:flex-row items-center justify-between w-full">

                    {/* Icons */}
                    <div className="flex gap-6 text-2xl md:text-3xl pt-2">
                        <a
                            href="https://github.com/mac.v"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 transition-colors"
                        >
                            <FaGithub/>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 transition-colors"
                        >
                            <FaLinkedin/>
                        </a>
                        <a
                            href="https://whatsapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 transition-colors"
                        >
                            <FaWhatsapp/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
