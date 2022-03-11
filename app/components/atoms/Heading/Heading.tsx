import React from "react";

export interface HeadingProps {
  label?: string;
}
export const Heading: React.FC<HeadingProps> = ({ label }) => {
  return (
    <>
      <div className="text-center text-4xl my-4" id="heading">
        {label}
      </div>
    </>
  );
};
