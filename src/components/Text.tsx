import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <p className="mx-auto text-center text-lg font-medium tracking-tight text-primary/80 md:text-xl">
      {children}
    </p>
  );
};
