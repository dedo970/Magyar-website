import * as React from "react";
import {
  FormControl,
  RadioGroup,
  Radio,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  FormLabel,
} from "@mui/material";



import type { UserInfo, Field, Error } from "~/types/hackathon.type";

export default function BasicInfoForm({
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
      Hráči jsou na našem Discord serveru, abychom na sebe měli kontakt.
	Připoj se tam taky a níže napiš, jak se tam jmenuješ. (např. Lemon_CZE#1234)
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Last name"
            fullWidth
            variant="outlined"
            error={error.lastName}
            value={userInfo.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </Grid>
        </Grid>
        </>
  )
}