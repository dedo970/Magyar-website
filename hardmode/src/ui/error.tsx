import { Lightbulb } from "~/ui/icons";
import type { ReactNode } from "react";

interface TipProps {
  children: ReactNode;
}

const Error = (props: TipProps) => {
  return (
    <div className="flex w-full items-center rounded-lg border border-neutral-800 p-1 mt-1">
      <Lightbulb width={20} className="text-yellow-500" />
      <p className="ml-2">{props.children}</p>
    </div>
  );
};

export default Error;
