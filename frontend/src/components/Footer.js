import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-customBlack4 border px-10 text-customWhite67 py-4 l:py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        {/* Email with icon */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-envelope text-lg text-customWhite67 "></i>
          <a
            href="mailto:your-email@example.com"
            className="text-xs md:text-md  hover:text-customLightGreen67"
          >
            maciastyedev@gmail.com
          </a>
        </div>

        {/* Made with passion and heart */}
        <div className="flex items-center space-x-2 text-xs md:text-md ">
          <p>Made with passion</p>
          <i className="fas fa-heart text-red-500"></i>
        </div>
      </div>
      <div className="text-center text-sm mt-4 text-customWhite47 ">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
