"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import { Tabs } from "@/components/ui/AnimatedTabs";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";


export function AnimatedFeatureProjects() {
    const tabs = [
        {
            title: "Insta Pay",
            value: "instapay",
            content: <Content image="/images/instapay1.png" title="InstaPay" githubLink="https://github.com/ASHISH7865/instapay" projectLink="https://insta-pay-wallet.vercel.app/" />,
        },
        {
            title: "Discount Hub",
            value: "discounthub",
            content: <Content image="/images/discounthub.png" title="Discount Hub" githubLink="https://github.com/ASHISH7865/discounthub-frontend" projectLink="https://discounthub-psi.vercel.app/" />,
        },
        {
            title: "Cryptoverse",
            value: "cryptoverse",
            content: <Content image="/images/cryptoverse.png" title="Cryptoverse" githubLink="https://github.com/ASHISH7865/CryptoInfo" projectLink="https://react-crypto-info.netlify.app/" />,
        },
    ];

    return (
        <div id="featured-projects" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-start my-40">
            <SectionHeader text="Featured Projects" />
            <Tabs tabs={tabs} />
        </div>
    );
}

interface ContentProps {
    image: string;
    title: string;
    projectLink: string;
    githubLink: string;
}

const Content = ({ image, title, projectLink, githubLink }: ContentProps) => {
    return (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="flex justify-between items-center ">
                <p className="text-2xl md:text-2xl font-bold text-white">{title}</p>
                <div className="flex space-x-5">
                    <Link href={projectLink} className="text-xl md:text-2xl font-bold text-white">
                        <FiExternalLink />
                    </Link>
                    <Link href={githubLink} className="text-xl md:text-2xl font-bold text-white">
                        <FiGithub />
                    </Link>
                </div>
            </div>
            <Image
                src={image}
                alt={title}
                width="1000"
                height="1000"
                className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
        </div>
    );
};
