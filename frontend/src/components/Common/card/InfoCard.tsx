import React from "react";

interface InfoCardProps {
    cardTitle: string;
    children: React.ReactNode;
    className?: string;
}

const InfoCard = ({ children , cardTitle , className  }: InfoCardProps) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold mb-4 capitalize">{cardTitle}</h2>
      <div className="p-6 rounded-md shadow-border">{children}</div>
    </div>
  );
};

export default InfoCard;
