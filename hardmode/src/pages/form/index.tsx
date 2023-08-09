/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from "react";

import {
  Container,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Stack,
} from "@mui/material";

import BasicInfoForm from "~/components/test/BasicInfoForm";
import Question2 from "~/components/test/Question2";
import Question3 from "~/components/test/Question3";
import Question4 from "~/components/test/Question4";
import MoreDetailsForm from "~/components/test/MoreDetailsForm";
import ProfileView from "~/components/test/ProfileView";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { api } from "~/utils/api";
import { ClientLink } from "~/utils/client-router";
import { Error } from "~/types/hackathon.type";
import type { UserInfo, Field } from "~/types/hackathon.type";
import Loading from "~/components/test/Loading";
import CreateSuccess from "~/components/test/CreateSuccess";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { nanoid } from "nanoid";

const steps = ["Basic Info","Question2","Question3","Question4", "More details", "Review"];
let dataId = nanoid(6);


const checkStepValidity = (
  userInfo: UserInfo,
  step: number,
  error: Error,
  setError: (error: Error) => void
) => {
  const newError: Error = {} as Error;
  if (step === 0) {
    newError.firstName = !userInfo.firstName;
  }
  if (step === 1) {
    newError.lastName = !userInfo.lastName;
  }
  if (step === 2) {
    newError.location = !userInfo.location;
  }
  if (step === 3) {
    newError.description = !userInfo.description;
  }
  if (step === 4) {
    newError.team = !userInfo.team;
  }
  setError({ ...error, ...newError });
  for (const key of Object.keys(newError) as Iterable<Field>) {
    if (newError[key]) return false;
  }
  return true;
};

const initialErrorState = {
  firstName: false,
  lastName: false,
  gender: false,
  dateOfBirth: false,
  sports: false,
  team: false,
  location: false,
  description: false,
};

export default function FormScreen() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    _id: "",
    firstName: "",
    lastName: "",
    team: "",
    location: "",
    description: "",
  });
  const [error, setError] = React.useState<Error>(initialErrorState);
  const [dirty, setDirty] = React.useState<boolean[]>([false, false]);

  const handleFormInputChange = React.useCallback(
    (field: Field, value: unknown, step: number) => {
      const newUserInfo: UserInfo = { ...userInfo, [field]: value };
      setUserInfo(newUserInfo);
      if (dirty[step]) checkStepValidity(newUserInfo, step, error, setError);
    },
    [dirty, error, userInfo]
  );

  const {
    data,
    mutate,
    isSuccess,
  }: {
    data: { _id: string } | undefined;
    mutate: (userInfo: UserInfo) => void;
    isSuccess: boolean;
  } = api.hackathon.createHackathon.useMutation({});

  const handleFinish = () => {
        try {
      mutate(userInfo);
      router.push(`/`);
      confetti({
        spread: 100,
      });
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleNext = () => {
    if (activeStep === 0) setDirty([true, dirty[1] as boolean]);
    if (activeStep === 1) setDirty([true, dirty[1] as boolean]);
    if (activeStep === 2) setDirty([true, dirty[1] as boolean]);
    if (activeStep === 3) setDirty([true, dirty[1] as boolean]);
    if (activeStep === 4) setDirty([dirty[0] as boolean, true]);
    if (activeStep === 5) {
      handleFinish();
    }
    if (!checkStepValidity(userInfo, activeStep, error, setError)) return;
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const stepContent = React.useMemo(() => {
    if (isSuccess) return <div>Success</div>;
    switch (activeStep) {
      case 0:
        return (
          <BasicInfoForm
            userInfo={userInfo}
            handleChange={(field: Field, value: unknown) =>
              handleFormInputChange(field, value, 0)
            }
            error={error}
          />
        );
      case 1:
        return (
          <Question2
            userInfo={userInfo}
            handleChange={(field: Field, value: unknown) =>
              handleFormInputChange(field, value, 1)
            }
            error={error}
          />
        );
        case 2:
          return (
            <Question3
              userInfo={userInfo}
              handleChange={(field: Field, value: unknown) =>
                handleFormInputChange(field, value, 1)
              }
              error={error}
            />
          );
        case 3:
          return (
            <Question4
              userInfo={userInfo}
              handleChange={(field: Field, value: unknown) =>
                handleFormInputChange(field, value, 1)
              }
              error={error}
            />
          );
        case 4:
          return (
            <MoreDetailsForm
              userInfo={userInfo}
              handleChange={(field: Field, value: unknown) =>
                handleFormInputChange(field, value, 1)
              }
              error={error}
            />
          );
      case 5:
        return <ProfileView userInfo={userInfo} sx={{ mt: 2 }} />;
      case 6:
        return isSuccess ? <div>Success</div> : <div>Saving ...</div>;
      default:
        throw new Error("Unknown step");
    }
  }, [isSuccess, activeStep, userInfo, error, handleFormInputChange]);

  return (
    <>
    <div className="flex items-center pt-4 top-2/4 h-screen">
      <Container component="main" maxWidth="md" sx={{ p: 2 }}>
          {activeStep === steps.length ? (
            isSuccess ? (
              <Loading />
            ) : (
              ""
            )
          ) : (
            <React.Fragment>
              {stepContent}
              {!isSuccess && (
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <button onClick={handleBack}>
                      Back
                    </button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              )}
            </React.Fragment>
          )}
      </Container>
      </div>
    </>
  );
}
