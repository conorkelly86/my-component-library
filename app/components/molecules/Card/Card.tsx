import React from "react";
import { Heading } from "~/components/atoms/Heading/Heading";

export interface CardProps {
  title?: string;
  text: string;
}
export const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div className="max-w-md py-4 px-8 shadow-lg rounded-lg my-20 bg-gradient-to-b from-sky-400 to-blue-500 w-autos ">
      <Heading label={title} />
      <div className="text-center mt-6 ">
        <p className="mb-6 text-white">{text}</p>
      </div>
    </div>
  );
};
