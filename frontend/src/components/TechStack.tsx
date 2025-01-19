import techIcons from './TechIcons';
import TechIcon from './TechIcon';

const TechStack = () => {
  return (
    <div className="mx-5 sm:mx-8 lg:mx-12 mb-10 lg:mb-16">
      <div className="m-5 p-6 bg-customBlack4 rounded-lg max-w-7xl mx-auto lg:p-11 shadow-lg shadow-customBlack6">
        <h2 className="text-2xl lg:text-3xl font-bold text-customWhite87 mb-4 lg:mb-8">
          Tech stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-customBlack8 p-6 rounded-lg">
          {techIcons.map((tech, index) => (
            <TechIcon key={index} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;