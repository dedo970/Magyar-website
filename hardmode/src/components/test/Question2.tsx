import * as React from "react";
import {
  Grid,
  Typography,
} from "@mui/material";



import type { UserInfo, Field } from "~/types/hackathon.type";

export default function BasicInfoForm({
  userInfo,
  handleChange,
}: {
  userInfo: UserInfo;
  handleChange: (field: Field, value: unknown) => void;
}) {
  return (
    <>
      <Typography variant="h6" gutterBottom className="text-xl font-semibold text-gray-300">
      Hráči sú na našom Discorde, aby sme na seba mali kontakt.
      Pripoj sa tam tiež a nižšie napíš, ako sa tam voláš. (napr. dedulo)
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <input
            required
            placeholder="Tvoje meno na Discorde"
            className="bg-transparent border-0 w-full outline-none text-2xl"
            value={userInfo.discord}
            onChange={(e) => handleChange("discord", e.target.value)}
          />
        </Grid>
        </Grid>
        </>
  )
}