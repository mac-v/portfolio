import Button from './Button';

const buttons = [
    {name: 'About me', target: 'about-me'},
    {name: 'Projects', target: 'projects'},
    {name: 'Blog', target: 'blog'},
    {name: 'Contact', target: 'contact'},
];

const Header = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="flex justify-center w-full sticky top-0 z-50">
            <div
                className="flex justify-center gap-2 p-2 rounded-full my-3 md:my-4 lg:p-3 bg-customBlack4
                   backdrop-blur-lg bg-opacity-80 shadow-lg shadow-customBlack10/50 transition-all duration-500 ease-in-out"
            >
                {buttons.map((button) => (
                    <Button
                        key={button.name}
                        name={button.name}
                        target={button.target}
                        onClick={scrollToSection}
                    />
                ))}
            </div>
        </div>
    );
};

export default Header;