type TechIconProps = {
    icon: React.ReactElement;
    name: string;
};

const TechIcon = (props: TechIconProps) => {
    const { icon, name } = props;

    return (
        <div
            className="flex justify-center items-center p-6 md:p-10 lg:p-12 bg-customBlack12 rounded-lg shadow-md text-white 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-colors duration-300 ease-in-out 
                       hover:text-customLightGreen67 hover:bg-customBlack14"
            title={name}
        >
            {icon}
        </div>
    );
};

export default TechIcon;