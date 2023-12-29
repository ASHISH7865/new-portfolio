import React from "react";

interface InfoCardProps {
    cardTitle: string;
    children: React.ReactNode;
    className?: string;
}

const InfoCard = ({ children , cardTitle , className  }: InfoCardProps) => {
  return (
    <div className={`${className} shadow-border p-6 rounded-lg group transform hover:-translate-y-2  transition-all duration-200 h-full`}>
      <h2 className="text-xl font-bold mb-4 capitalize dark:text-gray-300">{cardTitle}</h2>
      <div className="dark:text-gray-400">{children}</div>
    </div>
  );
};

export default InfoCard;
