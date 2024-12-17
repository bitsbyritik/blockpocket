import { ConnectButton } from "./ConnectButton";

export const HomePage = () => {
  return (
    <>
      <h1 className="flex gap-4 py-2 pt-48 text-center text-5xl font-extrabold tracking-tighter md:text-6xl xl:text-7xl">
        <span className="bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text py-1 text-transparent">
          Welcome to
        </span>
        <span className="py-1 w-fit bg-gradient-to-b from-blue-800 to-white   bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
          Blockpocket
        </span>
      </h1>

      <p className="mx-auto text-center text-lg font-medium tracking-tight text-primary/80 md:text-xl">
        Let&apos;s get started.
      </p>

      <ConnectButton />
    </>
  );
};
