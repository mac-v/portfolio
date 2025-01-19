import React from 'react';

type CardItem = {
  name: string;
  role: string;
  date: string;
  link: string;
  logo: string;
};

type CardProps = {
  title: string;
  items: CardItem[];
};

const Card = (props: CardProps) => {

  const { title, items } = props;
  return (
    <div className="flex gap:20 shadow-l pb-24 shadow-customBlack6 flex-col sm:pb-32 md:pb-48 lg:pb-64 lg:p-11 text-customWhite87 justify-start p-8 rounded-lg shadow-lg bg-customBlack4">
      <h1 className="text-2xl font-bold mb-10 lg:text-3xl lg:mb-12">{title}</h1>
      <ul className="space-y-4 flex gap-5 flex-col">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-start space-x-4 gap-12"
          >
            <div className="flex gap-5 justify-center items-center">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="bg-current opacity-90 rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center overflow-hidden shrink-0"
              >
                <img
                  src={`/${item.logo}.png`}
                  alt="Logo"
                  className="w-auto h-full object-contain"
                />
              </a>
              <div>
                <div>
                  <h2 className="text-md lg:text-lg font-semibold text-customWhite87">
                    {item.name}
                  </h2>
                  <p className="text-xs lg:text-sm text-customWhite47">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-customWhite47 text-right">
              {item.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;