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
      Proč sis vybral zrovna Enchant a co chceš na serveru dělat?
	Čím víc nás tvá zpráva zaujme, tím větší máš šanci na úspěch.
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={12}>
          <textarea
            required
            placeholder="Napíš svoju odpoveď sem"
            className="bg-transparent border-0 w-screen max-w-xl outline-none text-2xl"
            fullWidth
            multiline
            minRows={3}
            variant="outlined"
            error={error.description}
            value={userInfo.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
