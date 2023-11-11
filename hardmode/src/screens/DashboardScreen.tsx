import { api } from "../utils/api";
import { Button, Stack, Typography, Container } from "@mui/material";
import ProfileList from "../components/ProfileList";
import { ClientLink } from "../utils/client-router";
import type { THackathon } from "~/types/hackathon.type";
import Loading from "~/components/test/Loading";

export default function DashboardScreen() {
  const {
    data: rows,
    isLoading,
  }: { data: THackathon[] | undefined; isLoading: boolean } =
    api.hackathon.hackathons.useQuery({ id: "" });

  return (
    <Container component="main" maxWidth="md" sx={{ padding: 2 }}>
      <Stack direction="row" alignItems="end">
        <Typography component="h1" variant="h4">
          Profile List
        </Typography>
      </Stack>
      {isLoading ? (
        <Loading />
      ) : (
        <ProfileList rows={rows || []} sx={{ marginTop: 2 }} />
      )}
    </Container>
  );
}