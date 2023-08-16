import { useState } from "react";
import Head from "next/head";
import { signIn, signOut } from "next-auth/react";

import type { SxProps } from "@mui/material";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Button } from "~/ui";
import { Github } from "~/ui/icons";
import { toast } from "sonner";
import Up from "~/animations/up";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Link from 'next/link';
import { FormEvent } from 'react';
import { api } from "~/utils/api";
import LoginForm from "~/components/LoginForm";
import type { GetServerSideProps, NextPage } from "next";

import { getServerAuthSession } from "~/server/auth";
import ProfileList from "~/components/ProfileList";
import type { THackathon } from "~/types/hackathon.type";
import Loading from "~/components/test/Loading";
import type { Hackathon } from "@prisma/client";
import { ClientLink } from "~/utils/client-router";
const FormList: React.FC = () => {
    const {
        data: rows,
      }: { data: THackathon[] | undefined; isLoading: boolean, } =
        api.hackathon.hackathons.useQuery();
        
        const {data: hackathon} = api.hackathon.hackathons.useQuery();
        const sortedHackathons = hackathon
  return (
    <>
      <Head>
        <title>Auth - Project Hackathon</title>
      </Head>
        <div className="w-6/12 flex justify-center text-center m-auto my-auto top-0 bot-0 h-screen py-2/4">
        <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="right">Sports</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {sortedHackathons?.hackathon.map(
                    (hackathon: Hackathon) =>
              <TableRow
                key={hackathon.id}
              >
                <TableCell align="left">{`${hackathon.firstName} ${hackathon.lastName}`}</TableCell>
                <TableCell align="left">{`${hackathon.description}`}</TableCell>
                <TableCell align="left">{`${hackathon.location}`}</TableCell>
                <TableCell align="left">{`${hackathon.team}`}</TableCell>
                <TableCell align="right">
                <Button
                  component={ClientLink}
                  to={`/view/${hackathon.id}`}
                  size="small"
                >
                  View
                </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </>
  );
};
export default FormList;