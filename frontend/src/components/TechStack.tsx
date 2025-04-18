import TechIcon from "@/components/TechIcon";
import techIcons from "@/components/TechIcons";

const TechStack = () => {
    return (
        <div className="mx-5 sm:mx-8 lg:mx-12 mb-10 lg:mb-16 ">
            <div className="m-5 p-6 bg-custom-black-4 rounded-lg max-w-7xl mx-auto lg:p-11 shadow-lg shadow-custom-black-6 ">
                <h2 className="text-2xl lg:text-3xl font-bold text-custom-white-87 mb-4 lg:mb-8">
                    Tech stack
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6 bg-custom-black-8 p-6 rounded-lg">
                    {techIcons.map((tech, index) => (
                        <TechIcon key={index} icon={tech.icon} name={tech.name}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;