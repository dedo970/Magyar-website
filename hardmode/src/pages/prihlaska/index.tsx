import { useState } from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";

import { Button } from "~/ui";
import { Github } from "~/ui/icons";
import { toast } from "sonner";
import Up from "~/animations/up";
import MyForm from '../../components/MyForm';
import FormContextProvider from '../../context/FormContextProvider';
const prihlaska = () => {

  return (
    <>
      <Head>
        <title>Auth - Project Hackathon</title>
      </Head>
      <div className="">
      <FormContextProvider>
      <MyForm />
    </FormContextProvider>
    </div>
    </>
  );
};

export default prihlaska;