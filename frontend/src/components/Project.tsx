import Image from "next/image";

type ProjectProp = {
    title: string;
    technologies: string;
    duration: string;
    image: string;
    link: string;
};

const Project = ({title, technologies, duration, image, link}: ProjectProp) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-58 lg:w-72 bg-custom-black-12 rounded-lg shadow-md overflow-hidden text-white transform hover:scale-105 transition-transform duration-300 p-3"
        >

            <div className="relative w-full h-40 opacity-75">
                <Image
                    src={image}
                    fill
                    alt={title}
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="flex justify-between items-start p-2">
                <div>
                    <h3 className="text-sm lg:text-base font-bold text-custom-white-87">
                        {title}
                    </h3>
                    <p className="text-xs lg:text-sm text-custom-white-67">{technologies}</p>
                </div>
                <p className="text-sm text-customWhite47">{duration}</p>
            </div>
        </a>
    );
};

export default Project;
