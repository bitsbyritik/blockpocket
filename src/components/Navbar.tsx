import Link from "next/link";
import { ModeToggle } from "./Mode-toggle";

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-[999] w-full border-b border-primary/10 bg-background">
      <div className="wrapper flex w-full items-center justify-between p-3">
        <Link href={"/"} className="flex items-center gap-2">
          <p
            className={`hidden bg-gradient-to-b from-blue-800 to-white bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[375px]:block`}
          >
            Blockpocket
          </p>
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
