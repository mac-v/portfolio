import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="flex shadow-l shadow-customBlack6 flex-col  md:pb-48 lg:pb-64 lg:p-11 text-customWhite87 justify-start p-8 rounded-lg shadow-lg bg-customBlack4">
      <h1 className="text-2xl font-bold mb-4 lg:text-3xl lg:mb-8 ">{title}</h1>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-start space-x-4 gap-8"
          >
            <div className="flex gap-3 justify-start items-start">
              <a
                href={item.link}
                target="_blank"
                className="border bg-slate-300 opacity-90 rounded-full w-10 h-10 md:w-16 md:h-16 xl:w-24 xl:h-24 flex items-center justify-center overflow-hidden shrink-0"
              >
                <img
                  src={`/${item.logo}.png`}
                  alt="Logo"
                  className="w-auto h-full object-contain"
                />
              </a>
              <div>
                <div>
                  <h2 className="text-lg font-semibold text-customWhite87">
                    {item.name}
                  </h2>
                  <p className="text-sm text-customWhite47">{item.role}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-customWhite47 text-right">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
