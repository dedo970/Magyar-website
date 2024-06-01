import { Grid, Typography, Avatar } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { THackathon } from "../types/hackathon.type";

export default function ProfileView({
  userInfo,
  sx,
}: {
  userInfo: THackathon;
  sx: SxProps;
}) {
  return (
    <Grid container sx={sx}>
      <Grid
        container
        item
        xs={12}
        sm={5}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          mt: 1,
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/images/boy1.png"
          sx={{ width: 180, height: 180 }}
        />
        <Typography
          variant="h6"
          align="right"
          sx={{ fontStyle: "italic", mt: 1 }}
        >
          {`${userInfo.nickname} ${userInfo.discord}`}
        </Typography>
      </Grid>
      <Grid
        container
        item
        columnSpacing={2}
        rowSpacing={1}
        xs={12}
        sm={7}
        sx={{ alignItems: "start" }}
      >
        {/* <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="right">
            Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ mt: 0.5 }}>
          <Typography>{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
        </Grid> */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="right">
            Location
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ mt: 0.5 }}>
          <Typography>{`${userInfo.description}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="right">
            Team
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ mt: 0.5 }}>
          <Typography>{`${userInfo.age}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="right">
            Description
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ mt: 0.5 }}>
          <Typography>{`${userInfo.description}`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}