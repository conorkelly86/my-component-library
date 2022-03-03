import React from "react";

export interface WrapperProps {
  bgColor?: string;
}
export const Wrapper: React.FC<WrapperProps> = ({ children, bgColor }) => {
  return (
    <>
      <div className="flex h-screen" style={{ background: bgColor }}>
        <div className="m-auto">
          <div className="text-center my-5">{children}</div>
        </div>
      </div>
    </>
  );
};
