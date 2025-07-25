import React from "react";

const MyContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto w-[90%] md:w-[80%] xl:w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default MyContainer;
