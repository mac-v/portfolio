import React from 'react';

const Header = () => {
  const buttons = [
    { name: 'About me' },
    { name: 'Projects' },
    { name: 'Contact' },
  ];

  return (
    <div className="flex justify-center w-full sticky top-0 z-50">
      <div
        className="flex justify-center gap-2 rounded-full my-3 p-2 md:my-4 bg-customBlack4 
                      backdrop-blur-lg bg-opacity-80 shadow-lg shadow-customBlack10/50 transition-all duration-500 ease-in-out"
      >
        {buttons.map((button) => (
          <button
            key={button.name}
            className="border border-customBlack14 px-7 py-2 rounded-full bg-customBlack10 text-xs md:text-sm lg:text-md text-customWhite67 
                       hover:bg-customLightGreen67 hover:text-customWhite87 hover:border-customBlack18 transition-all duration-300 transform hover:scale-105"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
