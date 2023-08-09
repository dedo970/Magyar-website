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





import React from 'react'
import Biography from '~/components/steps/Biography'
import Confirm from '~/components/steps/Confirm'
import UserDetails from '~/components/steps/UserDetails'
import Welcome from '~/components/steps/Welcome'
import {Button} from 'react-bootstrap'
import Test from "~/components/steps/test"



const Dashboard = () => {

  //Steps
  const [activeStep, setActiveStep] = useState(0)

  const getSteps = () => {
    return ["Welcome", "User Details", "Biography", "Confirm"]
  }

  const steps = getSteps()

  //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    city: "",
    country: ""
  })

  //Navigates to the next page
  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1)
  }
  //Navigates to the Previous page
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1)
  }

  //Handle form value state on change
  const handleChange = (input) => (e) => {
    setMultiFormValues({...multiFormValues, [input]: e.target.value})
  }

  return (
    <>
      <Head>
        <title>Dashboard - Project Hackathon</title>
      </Head>
      <div className="mt-16 flex w-full flex-wrap items-center justify-between gap-2 border-b border-neutral-800 py-4 px-6 sm:flex-nowrap sm:gap-0">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="flex items-center space-x-2">
          {/* <CreateNew /> */}
          

          <div>
      {activeStep === 0 && (
        <Welcome handleChange={handleChange} />
      )}
      {activeStep === 1 && (
        <UserDetails values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <Biography values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 3 && (
        <Confirm values={multiFormValues} handleChange={handleChange} />
      )}

      <Button disabled={activeStep === 0} className="mr-5" onClick={handleBack} style={activeStep === 3 ? {display: 'none'} : {}} >Back</Button>

      <Button className="ml-5" variant="contained" onClick={handleNext} style={activeStep === 3 ? {display: 'none'} : {}} >{}{activeStep === steps.length - 2 ? 'Submit' : 'Next'}</Button>
    </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;