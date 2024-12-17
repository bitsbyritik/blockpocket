interface HeadingProps {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <div className="text-center text-3xl font-bold tracking-tighter md:text-4xl xl:text-5xl">
      <span className="bg-gradient-to-b from-primary/90 to-primary/80 bg-clip-text py-1 text-transparent">
        {children}
      </span>
    </div>
  );
};
