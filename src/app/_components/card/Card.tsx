import React from "react";
import { CardProps } from "./card.type";

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="h-[198px] w-[230px] text-center !bg-white rounded-base border border-gray-2 pt-3 pb-8 px-4 flex flex-col items-center gap-2 md:gap-4 md:h-[226px] md:w-[282px] cursor-grab">
      <div className="">{icon}</div>
      <h3 className="text-xs font-bold text-secondary">{title}</h3>
      <p className="text-xs font-medium text-secondary">{description}</p>
    </div>
  );
};

export default Card;
