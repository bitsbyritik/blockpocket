export const Seed = ({ id, seed }: { id: number; seed: string }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div>{id + 1}</div>
      <div className="text-gray-300 text-base">{seed}</div>
    </div>
  );
};
