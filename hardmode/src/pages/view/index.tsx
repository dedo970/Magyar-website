import { api } from "../utils/api";
import { Button, Stack, Typography, Container, Paper } from "@mui/material";
import { ClientLink } from "../utils/client-router";
import type { UserInfo } from "../types";
import Loading from "../components/Loading";
import { Grid, Avatar } from "@mui/material";
export default function ProfileViewScreen({ param: id }: { param: string }) {
  const {
    data: userInfo,
    isLoading,
  }: { data: UserInfo | undefined; isLoading: boolean } =
    api.hackaton.hackatons.useQuery({
      id,
    });

  return (
    <Container component="main" maxWidth="md" sx={{ padding: 2 }}>
      <Stack direction="row" alignItems="end">
        <Typography component="h1" variant="h4">
          Profile View
        </Typography>
        <Button
          component={ClientLink}
          to="/"
          variant="outlined"
          sx={{ marginLeft: "auto", textTransform: "none" }}
        >
          Go To Home
        </Button>
      </Stack>
      <Paper variant="elevation" elevation={3} sx={{ mt: 2, p: 3 }}>
        {isLoading ? (
          <Loading />
        ) : (
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
          {`${userInfo.firstName} ${userInfo.lastName}`}
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
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="right">
            Location
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ mt: 0.5 }}>
          <Typography>{`${userInfo.location}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" align="right">
            Team
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ mt: 0.5 }}>
          <Typography>{`${userInfo.team}`}</Typography>
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
        )}
      </Paper>
    </Container>
  );
}