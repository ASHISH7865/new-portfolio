"use client";
import { useEffect, useState } from "react"; // Import useState
import ActiveLink from "@/components/Common/ActiveLink";
import { Separator } from "@/components/ui/separator";
import { Link, animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";
const ScrollLink = Link;

interface NavLinksProps {
  viewport: string;
  NavLinks: any;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu = ({ viewport, NavLinks, open, setOpen }: NavLinksProps) => {
  let pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState<string | null>(pathname);

  const handleLinkClick = (link: any) => {
    
    setOpen && setOpen(false);
    
    setSelectedLink(link.name === selectedLink ? null : link.link);
    if (selectedLink === "/") {
      setSelectedLink("/Home")
    } else {
     setSelectedLink(link.link)
    }
  };

  useEffect(()=>{
    setSelectedLink(pathname)
  },[selectedLink , pathname])

  return (
    <nav className={`md:flex md:flex-col  ${viewport === "mobile" ? "flex flex-row gap-10" : "hidden"}`}>
      <div className="flex flex-col md:flex-row gap-5">
        {NavLinks?.map((link: any) => (
          <div key={link.id} className="flex flex-col">
            <div className="" onClick={() => handleLinkClick(link)}>
              <ActiveLink href={link?.link} className={`text-md font-medium leading-none capitalize  ${link.link === selectedLink ? "text-blue-500" : ""}`}>
                {link?.name}
              </ActiveLink>
            </div>
            <Separator className={`my-2 ${link.link === selectedLink && "dark:bg-white bg-[#333333]"}`} />
          </div>
        ))}
      </div>

      {selectedLink !== null && (
        <div className="w-[140px] min-h-[160px] md:w-[unset] md:min-h-[unset]">
          <div className="flex flex-col  gap-2 text-sm md:flex-row">
            {NavLinks?.find((link: any) => link?.link === selectedLink)?.subNavMenu?.subnavData?.map((subLink: any, index: number) => (
              <div key={subLink?.title} className="flex">
                <ScrollLink offset={-150} to={subLink?.link} spy={true} smooth={true} duration={800} onClick={()=>setOpen && setOpen(false)} className="capitalize text-sm cursor-pointer">
                  {subLink?.title}
                </ScrollLink>
                {NavLinks?.find((link: any) => link.link === selectedLink)?.subNavMenu?.subnavData?.length - 1 === index ? null : <Separator orientation="vertical" className="h-5 ml-2  hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
