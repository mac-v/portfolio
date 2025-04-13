const Footer = () => {
    return (
        <footer className="bg-custom-black-4 px-10 text-custom-white-67 py-4 l:py-8 mt-14 lg:mt-20">
            <div
                className="max-w-screen-lg mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-envelope text-lg text-custom-white-67 "></i>
                    <a
                        href="mailto:your-email@example.com"
                        className="text-xs md:text-md  hover:text-custom-light-green-67"
                    >
                        maciastyedev@gmail.com
                    </a>
                </div>

                <div className="flex items-center space-x-2 text-xs md:text-md ">
                    <p>Made with</p>
                    <i className="fas fa-heart text-red-500"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
