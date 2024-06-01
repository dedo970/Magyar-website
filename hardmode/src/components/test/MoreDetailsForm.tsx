import * as React from "react";
import { Grid, Typography } from "@mui/material";
import type { UserInfo, Field, Error } from "~/types/hackathon.type";

export default function MoreDetailsForm({
  userInfo,
  handleChange,
}: {
  userInfo: UserInfo;
  handleChange: (field: Field, value: unknown) => void;
}) {
  return (
    <>
      <Typography variant="h6" gutterBottom className="text-xl font-semibold text-gray-300">
      Koľko máš rokov?
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <input
            required
            placeholder="Napíš svoj vek"
            className="bg-transparent border-0 w-full outline-none text-2xl"
            value={userInfo.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
