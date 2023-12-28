import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 sm:gap-8">
      <Link className="flex  space-x-5" href={"https://www.linkedin.com/in/ashish7865/"}>
        <FaLinkedin className="text-2xl sm:text-4xl hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
      </Link>
      <Link className="flex  space-x-5" href={"mailto:jaiswalashish9467@gmail.com"}>
        <HiOutlineMail className="text-2xl sm:text-4xl hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
      </Link>
      <Link className="flex  space-x-5" href={"https://github.com/ASHISH7865"}>
        <FaSquareGithub className="text-2xl sm:text-4xl hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
      </Link>
      <Link className="flex  space-x-5" href={"https://twitter.com/ASHISH60756114"}>
        <FaXTwitter className="text-2xl sm:text-4xl hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialLinks;
