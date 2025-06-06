import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
      <h1 className={cn("text-3xl font-semibold")}>
        <img src="/imgs/trans.webp" alt="" />
        {/* Auth */}
      </h1>
      <p className="text-muted-foreground text-sm">{props.label}</p>
    </div>
  );
};
