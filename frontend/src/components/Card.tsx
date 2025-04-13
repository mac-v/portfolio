import Image from "next/image";

type CardItemProps = {
  name: string;
  role: string;
  date: string;
  link: string;
  logo: string;
};

type CardProps = {
  title: string;
  items: CardItemProps[];
};

const Card = ({ title, items }: CardProps) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 pb-24 sm:pb-32 md:pb-48 lg:pb-64 lg:p-10 rounded-lg text-custom-white-87 p-8 bg-gradient-to-b from-custom-black-4 via-custom-black-6 to-custom-black-8 border border-white/10 rounded-xl shadow shadow-white/10">
      <h1 className="text-2xl  font-bold lg:text-3xl ">{title}</h1>
      <ul className="space-y-4 flex flex-col gap-5 ">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-start gap-12 ">
            <div className="flex gap-5 justify-center items-center ">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="bg-current  opacity-90 rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center overflow-hidden shrink-0"
              >

                <Image
                  src={`/${item.logo}.png`}
                  alt={`${item.name} logo`}
                  width={60}
                  height={60}
                  className=" "
                />
              </a>
              <div>
                <h2 className="text-md lg:text-lg font-semibold text-custom-white-87">
                  {item.name}
                </h2>
                <p className="text-xs lg:text-sm text-custom-white-47">
                  {item.role}
                </p>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-custom-white-47 text-right">
              {item.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
