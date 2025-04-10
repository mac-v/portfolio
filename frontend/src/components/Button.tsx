type ButtonProps = {
    name: string;
    target: string;
    onClick: (target: string) => void;
};

const Button = ({ name, target, onClick }: ButtonProps) => {
    return (
        <button
            className="border border-customBlack14 px-7 xl:px-10 xl:py-3 py-2 rounded-full bg-customBlack10 text-xs md:text-sm lg:text-md xl:text-lg text-customWhite67 
                 hover:bg-customLightGreen67 hover:text-customWhite87 hover:border-customBlack18 transition-all duration-300 transform hover:scale-105"
            onClick={() => onClick(target)}
        >
            {name}
        </button>
    );
};

export default Button;

