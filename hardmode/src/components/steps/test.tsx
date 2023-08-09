import React from "react"
import { useForm } from "react-hook-form"
import type { THackathon } from "~/types/hackathon.type";
import { api } from "~/server/api";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";
import { nanoid } from "nanoid";

import { Plus } from "~/ui/icons";
import { Modal, Button, Alert, Tip } from "~/ui";
import { inputStyles } from "~/ui/input";
import { toast } from "sonner";
import confetti from "canvas-confetti";
const STEPS_AMOUNT = 1

const FinishSectionButton: React.FC<{
  onClick: () => void
  isDisabled: boolean
}> = ({ onClick, isDisabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type="button"
      className="mt-6 bg-green-500 text-white rounded py-6 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

const IndexPage = () => {
  const [formStep, setFormStep] = React.useState(0)
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  let dataId = nanoid(6);


  const { mutate } = api.hackathon.createHackathon.useMutation({
    onSuccess: () => {
      router.push(`/`);
      setLoading(false);
      confetti({
        spread: 100,
      });
    },
    onError: () => {
      setLoading(false);
    },
  });


  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<THackathon>();

  const handleStepCompletion = () => {
    setFormStep(cur => cur + 1)
  }

  const handleGoBackToPreviousStep = () => {
    setFormStep(cur => cur - 1)
  }

  const onSubmit: SubmitHandler<THackathon> = (data)=> {
    try {
        setLoading(true);
        mutate({
          ...data,
          id: dataId
        });
        toast.success("Hackathon created successfully");
      } catch (err) {
        setLoading(false);
        toast.error("Something went wrong");
      }
    console.log(JSON.stringify(data, null, 2))
    handleStepCompletion()
  }

  return (
    <div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="h-2 bg-gray-200 w-full overflow-hidden">
          <div
            style={{ width: `${(formStep / STEPS_AMOUNT) * 100}%` }}
            className="h-full bg-yellow-400 transform duration-300 ease-out"
          ></div>
        </div>
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            {formStep < STEPS_AMOUNT && (
              <div className="flex items-center font-medium mb-8">
                {formStep > 0 && (
                  <button
                    onClick={handleGoBackToPreviousStep}
                    type="button"
                    className="focus:outline-none"
                  >
                  </button>
                )}
                Step {formStep + 1} of {STEPS_AMOUNT}
              </div>
            )}
            {formStep >= 0 && (
              <section className={`${formStep === 0 ? "block" : "hidden"}`}>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="text-input"
                  {...register("firstName",{
                    required: { message: "Please enter", value: true },
                    minLength: { message: "Minimum length 3", value: 3 },
                  })}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-600 mt-2">
                    {errors.firstName.message}
                  </p>
                )}
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
            {formStep >= 1 && (
              <section className={`${formStep === 1 ? "block" : "hidden"}`}>
                <h2 className="font-semibold text-3xl mb-8">
                  Billing Information
                </h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="text-input"
                  {...register("city",{
                    required: { message: "Please enter", value: true },
                  })}
                />
                {errors.city && (
                  <p className="text-sm text-red-600 mt-2">
                    {errors.city.message}
                  </p>
                )}
                <FinishSectionButton
                  onClick={handleStepCompletion}
                  isDisabled={!isValid}
                >
                  Next
                </FinishSectionButton>
              </section>
            )}
          </form>
        </div>
      </div>
      </div>
  )
}

export default IndexPage