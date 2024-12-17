import { Appbar } from "./Appbar";

export const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex h-full flex-col items-center justify-center gap-4">
        <Appbar />
      </main>
    </div>
  );
};
