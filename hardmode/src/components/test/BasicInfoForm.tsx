import * as React from "react";
import {
  Grid,
  Typography,
} from "@mui/material";



import type { UserInfo, Field, Error } from "~/types/hackathon.type";

export default function BasicInfoForm({
  userInfo,
  handleChange,
}: {
  userInfo: UserInfo;
  handleChange: (field: Field, value: unknown) => void;
}) {
  return (
    <>
      <Typography variant="h6" className="my-3.5 text-xl font-semibold text-gray-300">
      Začnime od začiatku. Akú prezývku používaš v Minecrafte?
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <input
            required
            placeholder="Zadaj svoj nick"
            className="bg-transparent border-0 outline-none text-2xl w-full"
            value={userInfo.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </Grid>
        </Grid>
        </>
  )
}