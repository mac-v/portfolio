type ProjectProp = {
    title: string;
    technologies: string;
    duration: string;
    image: string;
    link: string;
};

const Project = ({ title, technologies, duration, image, link }: ProjectProp) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-72 bg-customBlack10 rounded-lg shadow-md overflow-hidden text-white transform hover:scale-105 transition-transform duration-300"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg p-3"
            />
            <div className="p-4 pt-0 flex justify-between items-start">
                <div>
                    <h3 className="text-lg lg:text-xl font-bold text-customWhite87">
                        {title}
                    </h3>
                    <p className="text-customWhite67">{technologies}</p>
                </div>
                <p className="text-sm text-customWhite47">{duration}</p>
            </div>
        </a>
    );
};

export default Project;