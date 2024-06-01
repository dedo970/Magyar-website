import * as React from "react";

import {
  Container,
  Box,
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
import {Error} from "~/types/hackathon.type";
import type { UserInfo, Field } from "~/types/hackathon.type";
import Loading from "~/components/test/Loading";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
const steps = ["Basic Info","Question2","Question3","Question4", "More details", "Review"];


const checkStepValidity = (
  userInfo: UserInfo,
  step: number,
  error: Error,
  setError: (error: Error) => void
) => {
  const newError: Error = {} as Error;
  if (step === 0) {
    newError.nickname = !userInfo.nickname;
  }
  if (step === 1) {
    newError.discord = !userInfo.discord;
  }
  if (step === 2) {
    newError.description = !userInfo.description;
  }
  if (step === 3) {
    newError.userinterest = !userInfo.userinterest;
  }
  if (step === 4) {
    newError.age = !userInfo.age;
  }
  setError({ ...error, ...newError });
  for (const key of Object.keys(newError) as Iterable<Field>) {
    if (newError[key]) return false;
  }
  return true;
};

const initialErrorState = {
  nickname: false,
  discord: false,
  gender: false,
  dateOfBirth: false,
  sports: false,
  age: false,
  description: false,
  userinterest: false,
};

export default function FormScreen() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    _id: "",
    nickname: "",
    discord: "",
    age: "",
    description: "",
    userinterest: "",
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
    mutate,
    isSuccess,
  }: {
    data: { id: string } | undefined;
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
    if (!checkStepValidity(userInfo, activeStep,error, setError)) return;
    setActiveStep(activeStep + 1);
  }

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
          />
        );
      case 1:
        return (
          <Question2
            userInfo={userInfo}
            handleChange={(field: Field, value: unknown) =>
              handleFormInputChange(field, value, 1)
            }
          />
        );
        case 2:
          return (
            <Question3
              userInfo={userInfo}
              handleChange={(field: Field, value: unknown) =>
                handleFormInputChange(field, value, 1)
              }
            />
          );
        case 3:
          return (
            <Question4
              userInfo={userInfo}
              handleChange={(field: Field, value: unknown) =>
                handleFormInputChange(field, value, 1)
              }
            />
          );
        case 4:
          return (
            <MoreDetailsForm
              userInfo={userInfo}
              handleChange={(field: Field, value: unknown) =>
                handleFormInputChange(field, value, 1)
              }
            />
          );
      case 5:
        return <><ProfileView userInfo={userInfo} /></>;
      case 6:
        return isSuccess ? <div>Success</div> : <div>Saving ...</div>;
      default:
        throw new Error("Unknown step");
    }
  }, [isSuccess, activeStep, userInfo,error, handleFormInputChange]);

  return (
    <>
    <div className="flex items-center pt-4 top-2/4 min-h-screen">
      <Container component="main" maxWidth="md" sx={{ p: 2 }}>
          {activeStep === steps.length ? (
            isSuccess ? (
              <Loading />
            ) : (
              ""
            )
          ) : (
            <React.Fragment>
              <Link href="/">
              <Image alt="no photo" src="/Hardmode-logo.png" className="w-16 mb-2" width={44} height={44} />
              </Link>

              {stepContent}
              <div className=" justify-between">
              {!isSuccess && (
                <Box>
                  {activeStep !== 0 && (
                    <button 
                    className="uppercase opacity-30 mt-5 font-black text-sm cursor-pointer mr-2"
                    onClick={handleBack}>
                      Späť
                    </button>
                  )}
                  <button
                    className="uppercase opacity-30 mt-5 font-black text-sm cursor-pointer"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Poslať" : "Ďalej"}
                  </button>
                </Box>
              )}
              </div>
            </React.Fragment>
          )}
      </Container>
      </div>
    </>
  );
}
