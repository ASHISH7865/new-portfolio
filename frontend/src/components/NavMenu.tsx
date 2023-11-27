
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "#home",
    description: "The main page",
  },
  {
    title: "About",
    href: "#about",
    description: "The about page",
  },
  {
    title: "Projects",
    href: "#projects",
    description: "The projects page",
  },
  {
    title: "Work",
    href: "#work",
    description: "The work page",
  },
  {
    title: "Skills",
    href: "#skills",
    description: "The skills page",
  },
  {
    title: "Contact",
    href: "#contact",
    description: "The contact page",
  },
];

const NavMenu = ({viewport} : {viewport : string}) => {
  return (
    <nav className={` md:flex flex-col md:flex-row gap-4 ${viewport === "mobile" ? "flex": "hidden"}`}>
      <a className=" text-sm md:text-base hover:text-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out " href="#">
        About
      </a>
      <a className=" text-sm md:text-base hover:text-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out " href="#">
        Projects
      </a>
      <a className=" text-sm md:text-base hover:text-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out " href="#">
        Work
      </a>
      <a className=" text-sm md:text-base hover:text-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out " href="#">
        Skills
      </a>
      <a className=" text-sm md:text-base hover:text-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out " href="#">
        Contact
      </a>
    </nav>
  );
};

export default NavMenu;
