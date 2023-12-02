

const NavMenu = ({ viewport , NavLinks }: { viewport: string , NavLinks : any}) => {
  console.log(NavLinks);
  return (
    <nav className={` md:flex flex-col md:flex-row gap-4 ${viewport === "mobile" ? "flex" : "hidden"}`}>
      {NavLinks?.map((link : any) => (
        <a className=" text-lg md:text-base hover:text-gray-400 hover:transition-all hover:duration-500 hover:ease-in-out capitalize " href={link.link} key={link.id}>
          {link?.name}
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;
