import * as React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import type { UserInfo, Field, Error } from "~/types/hackathon.type";

export default function MoreDetailsForm({
  userInfo,
  handleChange,
  error,
}: {
  userInfo: UserInfo;
  handleChange: (field: Field, value: unknown) => void;
  error: Error;
}) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
      Dále by nás zajímalo, jak jsi se o našem serveru dozvěděl/a.
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <textarea
            required
            placeholder="Napíš svoju odpoveď sem"
            fullWidth
            className="bg-transparent border-0 w-screen max-w-xl outline-none text-2xl"
            variant="outlined"
            error={error.location}
            value={userInfo.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
