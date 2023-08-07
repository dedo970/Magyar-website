import { useState } from "react";
import Head from "next/head";
import { api } from "~/server/api";
import type { Hackathon } from "@prisma/client";

import { Input, Tip, Tooltip } from "~/ui";
import { ArrowDown } from "~/ui/icons";
import Up from "~/animations/up";
import Down from "~/animations/down";
import MultiStep from 'react-multistep'
import CreateNew from "~/components/createNew";



import { FormEvent } from "react"
import { AccountForm } from "~/components/form/AccountForm"
import { AddressForm } from "~/components/form/AddressForm"
import { useMultistepForm } from "~/components/form/useMultistepForm"
import { UserForm } from "~/components/form/UserForm"


const Dashboard = () => {



  return (
    <>
      <Head>
        <title>Dashboard - Project Hackathon</title>
      </Head>
      <div className="mt-16 flex w-full flex-wrap items-center justify-between gap-2 border-b border-neutral-800 py-4 px-6 sm:flex-nowrap sm:gap-0">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CreateNew />
          

          
        </div>
      </div>
    </>
  );
};

export default Dashboard;