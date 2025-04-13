import Button from "@/components/Button";
const buttons = [
  { name: 'About me', target: 'about-me' },
  { name: 'Projects', target: 'projects' },
  { name: 'Contact', target: 'contact' },
  { name: 'Blog', target: 'blog' },
];

const Header = () => {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center w-full sticky top-0 z-50">
      <div
        className="flex justify-center gap-2 p-2 rounded-full my-3 md:my-4 lg:p-3 bg-custom-black-4
                   backdrop-blur-lg bg-opacity-80 shadow-lg shadow-custom-black-10/50 transition-all duration-500 ease-in-out"
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