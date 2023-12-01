const NavLinks = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Work",
    link: "#",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const NavMenu = ({ viewport }: { viewport: string }) => {
  return (
    <nav className={` md:flex flex-col md:flex-row gap-4 ${viewport === "mobile" ? "flex" : "hidden"}`}>
      {NavLinks.map((link) => (
        <a className=" text-lg md:text-base hover:text-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out " href={link.link} key={link.link}>
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;
