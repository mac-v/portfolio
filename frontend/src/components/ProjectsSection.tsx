import Project from "@/components/Project";
import projectsData from "@/data/projects.json";
const MyProjects = () => {
  return (
    <div id="projects" className="mx-5 sm:mx-8 lg:mx-12 mb-10 lg:mb-16">
      <div className="m-5 p-6 bg-custom-black-4 rounded-lg max-w-7xl mx-auto lg:p-11 shadow-lg shadow-custom-black-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-custom-white-87 mb-4 lg:mb-8">
          My projects
        </h2>
        <div className="flex flex-wrap gap-5 justify-center ">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;