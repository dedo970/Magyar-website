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
      Začneme od začátku. Jakou přezdívku používáš v Minecraftu?
      </Typography>
      <Grid container spacing={3} sx={{ mt: -1 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="First name"
            fullWidth
            variant="outlined"
            error={error.firstName}
            value={userInfo.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </Grid>
        </Grid>
        </>
  )
}