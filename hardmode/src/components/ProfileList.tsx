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
import UserViewModal from "../ui/UserViewModal"
import { Button, Modal } from "~/ui";
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

import { EmailTemplate } from '~/components/email/email-template';
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import DeleteHackathon from "./deleteSendedForm";
import { Cancel } from "~/ui/icons";
import * as Dialog from "@radix-ui/react-dialog";

const FormList: React.FC = () => {
    const {
        data: rows,
      }: { data: THackathon[] | undefined; isLoading: boolean, } =
        api.hackathon.hackathons.useQuery();
        
        const {data: hackathon} = api.hackathon.hackathons.useQuery();
        const sortedHackathons = hackathon

        // const resend = new Resend("re_jinzv8ge_DxbQUHT3UKt5aTyQWnGBbsJh");
        // const handleClick = async () => {
        //   try {
        //     const { data, error } = await resend.emails.send({
        //       from: 'Acme <magyar.minecraft.com>',
        //       to: ['jakub.kovac545@gmail.com'],
        //       subject: "Hello world",
        //       react: EmailTemplate({ firstName: "leo" }) as React.ReactElement,
        //     });
        
        //     if (error) {
        //       return NextResponse.json({ error });
        //     }
        
        //     return NextResponse.json({ data });
        //   } catch (error) {
        //     return NextResponse.json({ error });
        //   }
        // };

  return (
    <>
      <Head>
        <title>Auth - Project Hackathon</title>
      </Head>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-auto top-0 bot-0 mt-14">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-6 py-3">Nickname:</th>
      <th scope="col" className="px-6 py-3">Discord:</th>
      {/* <th scope="col" className="px-6 py-3">Year</th> */}
      <th scope="col" className="px-6 py-3">VeK:</th>
      <th scope="col" className="px-6 py-3"></th>
    </tr>
  </thead>
  <tbody>
          {sortedHackathons?.hackathon.map(
                    (hackathon: Hackathon) =>
              <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={hackathon.id}
              >
                <td align="left">{`${hackathon.firstName}`}</td>
               <td align="left">{`${hackathon.lastName}`}</td>
                {/* <td align="left">{`${hackathon.description}`}</td> */}
                <td align="left">{`${hackathon.team}`}</td>
                <UserViewModal key={hackathon.id} btn={<button className="text-white">View</button>}>
                          <div className="flex flex-col gap-6 w-auto">
                            <div>
                          <h1>Začneme od začátku. Jakou přezdívku používáš v Minecraftu?</h1>
                          <hr className="mb-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
  </div>
                <p>{hackathon.firstName}  {hackathon.lastName}</p>
                <div>
                <h1>Hráči jsou na našem Discord serveru, abychom na sebe měli kontakt. Připoj se tam taky a níže napiš, jak se tam jmenuješ. (např. Lemon_CZE#1234)</h1>
                <hr className="mb-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
  </div>
                <p>{hackathon.description}</p>
<div>
                <h1>Dále by nás zajímalo, jak jsi se o našem serveru dozvěděl/a.</h1>
                <hr className="mb-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                </div>                
                <p>{hackathon.location}</p>
<div>
                <h1>Proč sis vybral zrovna Enchant a co chceš na serveru dělat? Čím víc nás tvá zpráva zaujme, tím větší máš šanci na úspěch.</h1>
                <hr className="mb-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                </div>
                <p>{hackathon.team}</p>

<div>
                <h1>Kolik je ti let?</h1>
                <hr className="mb-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                </div>
                <p>{hackathon.team}</p>
                </div>
                </UserViewModal>
                <DeleteHackathon id={hackathon.id} />
              </tr>
            )}
          </tbody>
</table>
</div>
      </>
  );
};
export default FormList;