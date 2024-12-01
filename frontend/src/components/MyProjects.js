import React from 'react';

const MyProjects = () => {
  const projects = [
    {
      title: 'REST API',
      technologies: 'Python,Flask',
      duration: '10-24',
      image: '/images/rest_api.png',
      link: 'https://github.com/mac-v/links-manager',
    },
    {
      title: 'ETL process',
      technologies: 'Python,EDA',
      duration: '07-23',
      image: '/images/etl.png',
      link: 'https://github.com/mac-v/ETL-EDA-Otomoto',
    },
    {
      title: 'Data analysis',
      technologies: 'SQL,R,AWS',
      duration: '09-23',
      image: '/images/da.png',
      link: 'https://github.com/mac-v/bike-share',
    },

    {
      title: 'Portfolio',
      technologies: 'React,Django',
      duration: '11-24',
      image: '/images/portfolio.webp',
      link: 'https://github.com/mac-v/portfolio',
    },
  ];
  return (
    <div id="projects" className="mx-5 sm:mx-8 lg:mx-12 mb-10 lg:mb-16">
      <div className="m-5 p-6 bg-customBlack4 rounded-lg  max-w-7xl mx-auto lg:p-11 shadow-lg shadow-customBlack6">
        <h2 className="text-2xl lg:text-3xl font-bold text-customWhite87 mb-4 lg:mb-8">
          My projects
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="w-72 bg-customBlack10 rounded-lg shadow-md overflow-hidden text-white transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg p-3"
              />
              <div className="p-4 pt-0 flex justify-between items-start">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-customWhite87">
                    {project.title}
                  </h3>
                  <p className="text-customWhite67">{project.technologies}</p>
                </div>

                <p className="text-sm text-customWhite47">{project.duration}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
