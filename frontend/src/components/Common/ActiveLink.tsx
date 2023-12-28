import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";
import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

const ActiveLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => {
  const pathname = usePathname()

  let classes = className || "";
    if (pathname === href) {
    classes += " active";
  }

  return (
    <Link href={href} className={classes}>
     {children}
    </Link>
  );
};

export default ActiveLink;