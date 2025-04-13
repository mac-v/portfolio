type ButtonProps = {
    name: string;
    target: string;
    onClick: (target: string) => void;
};

const Button = ({ name, target, onClick }: ButtonProps) => {
    return (
        <button
            className="border border-custom-black-14 px-7 xl:px-10 xl:py-3 py-2 rounded-full bg-custom-black-10 text-xs md:text-sm lg:text-md xl:text-lg text-custom-white-67
                 hover:bg-custom-light-green-87 hover:text-custom-white-87 hover:border-custom-black-18 transition-all duration-300 transform hover:scale-105"
            onClick={() => onClick(target)}
        >
            {name}
        </button>
    );
};

export default Button;

