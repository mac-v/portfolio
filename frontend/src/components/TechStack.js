import React from 'react';
import {
  FaPython,
  FaReact,
  FaGithub,
  FaJava,
  FaAws,
  FaDocker,
} from 'react-icons/fa';
import {
  SiDjango,
  SiFlask,
  SiOracle,
  SiFigma,
  SiGooglecloud,
  SiDatabricks,
} from 'react-icons/si';
import {
  TbBrandMysql,
  TbBrandAzure,
  TbBrandSupabase,
  TbBrandVercel,
} from 'react-icons/tb';
const TechStack = () => {
  const techIcons = [
    { icon: <SiDjango />, name: 'Django' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <SiOracle />, name: 'Oracle' },
    {
      icon: <img src="/images/powerbi.png" alt="Power BI" />,
      name: 'Power BI',
    },
    { icon: <TbBrandMysql />, name: 'SQL Server' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiGooglecloud />, name: 'GCP' },
    { icon: <TbBrandAzure />, name: 'Azure' },
    { icon: <SiDatabricks />, name: 'Databricks' },
    { icon: <TbBrandSupabase />, name: 'Supabase' },
    { icon: <TbBrandVercel />, name: 'Vercel' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiFigma />, name: 'Figma' },
  ];

  return (
    <div className="mx-5 sm:mx-8 lg:mx-12 mb-10 lg:mb-16">
      <div className="m-5 p-6 bg-customBlack4 rounded-lg max-w-7xl mx-auto lg:p-11 shadow-lg shadow-customBlack6">
        <h2 className="text-2xl lg:text-3xl font-bold text-customWhite87 mb-4 lg:mb-8">
          Tech stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-customBlack8 p-6 rounded-lg">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-6  md:p-10 lg:p-12 bg-customBlack12 rounded-lg shadow-md text-white 
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-colors duration-300 ease-in-out 
                      hover:text-customLightGreen67 hover:bg-customBlack14"
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
