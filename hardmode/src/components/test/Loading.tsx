import { CircularProgress, Box } from "@mui/material";
import { RaceBy, Ring } from "@uiball/loaders";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <span>{"Loading..."}</span>
      <div>
        <Ring size={25} color="#22c55e" />
      </div>
    </div>
  );
}
