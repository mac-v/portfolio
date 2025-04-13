type TechIconProps = {
    icon: React.ReactElement;
    name: string;
};

const TechIcon = (props: TechIconProps) => {
    const { icon, name } = props;

    return (
        <div
            className="flex justify-center items-center p-6 md:p-10 lg:p-12 bg-gradient-to-br from-custom-black-4 to-custom-black-6  rounded-lg shadow-md text-white
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-colors duration-300 ease-in-out
                       hover:text-custom-light-green-67 hover:bg-gradient-to-b hover:from-custom-black-10 hover:to-custom-black-12"
            title={name}
        >
            {icon}
        </div>
    );
};

export default TechIcon;