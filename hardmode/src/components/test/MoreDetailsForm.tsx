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
      Kolik je ti let?
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Team"
            fullWidth
            variant="outlined"
            error={error.team}
            value={userInfo.team}
            onChange={(e) => handleChange("team", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
