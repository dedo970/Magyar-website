import * as React from "react";
import { Grid, Typography } from "@mui/material";
import type { UserInfo, Field } from "~/types/hackathon.type";

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
      Ďalej by nás zaujímalo, ako si sa o našom serveri dozvedel/a.
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <textarea
            required
            placeholder="Napíš svoju odpoveď sem"
            className="bg-transparent border-0 w-screen max-w-xl outline-none text-2xl"
            value={userInfo.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
