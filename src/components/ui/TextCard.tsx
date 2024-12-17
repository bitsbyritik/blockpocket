interface TextCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TextCard = ({ children }: TextCardProps) => {
  return (
    <div className="bg-gray-800 text-gray-400 p-4  border rounded-md">
      {children}
    </div>
  );
};
