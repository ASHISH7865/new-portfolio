'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "./badge";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        id: string;
        skills: { id: string, title: string, description: string }[]
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    let [clickBadge, seClickBadge] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items?.map((item, idx) => (
                <div
                    key={item?.id}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => {
                        setHoveredIndex(null);
                        seClickBadge(null);

                    }}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        {item.skills.map((skill) => (
                            <Badge
                                key={skill.id}
                                className="mr-2 mb-2 cursor-pointer"
                                onClick={() => seClickBadge(skill.id)}
                            >
                                {skill.title}
                            </Badge>
                        ))}
                        {clickBadge !== null &&
                            item.skills.map((skill) => {
                                if (skill.id === clickBadge) {
                                    return (
                                        <AnimatePresence key={skill.id}>
                                            <motion.div
                                                className="absolute top-0 left-0 transform h-full bg-slate-800 rounded-lg p-4"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={{ type: "spring", duration: 0.5 }}
                                            >
                                                <div key={skill.id} className="flex flex-col items-center justify-between">
                                                    <span className="absolute top-0 right-0 p-2 cursor-pointer" onClick={() => seClickBadge(null)}> <IoMdCloseCircleOutline /> </span>
                                                    <h4 className="text-zinc-100 font-bold tracking-wide">{skill.title}</h4>
                                                    <p className="text-zinc-400 tracking-wide leading-relaxed text-sm">{skill.description}</p>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    )
                                }
                            })
                        }
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-950 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
