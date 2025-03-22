import React from "react";

interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className="border border-gray-700 p-8 rounded-xl shadow-lg bg-gray-900 w-full h-full flex flex-col 
                    justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-gray-300">{body}</p>
    </div>
  );
};

export default Card;
