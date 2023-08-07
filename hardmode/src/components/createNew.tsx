import { api } from "~/server/api";
import { useState } from "react";
import type { THackathon } from "~/types/hackathon.type";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { Plus } from "~/ui/icons";
import { Modal, Button, Alert, Tip } from "~/ui";
import { inputStyles } from "~/ui/input";
import { toast } from "sonner";
import confetti from "canvas-confetti";

const CreateNew = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  let dataId = nanoid(6);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<THackathon>();

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

  const onSubmit: SubmitHandler<THackathon> = (data) => {
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
  };

  return (

      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name">Title:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q1", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          />
          {errors.Q1 && <Alert>{errors.Q1?.message}</Alert>}
        </div>
        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q2", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q2 && <Alert>{errors.Q2?.message}</Alert>}
        </div>
        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q3", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q3 && <Alert>{errors.Q3?.message}</Alert>}
        </div>



        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q4", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q4 && <Alert>{errors.Q4?.message}</Alert>}
        </div>


        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q5", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q5 && <Alert>{errors.Q5?.message}</Alert>}
        </div>


        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q6", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q6 && <Alert>{errors.Q6?.message}</Alert>}
        </div>



        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q7", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q7 && <Alert>{errors.Q7?.message}</Alert>}
        </div>


        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q8", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q8 && <Alert>{errors.Q8?.message}</Alert>}
        </div>



        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q9", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q9 && <Alert>{errors.Q9?.message}</Alert>}
        </div>



        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("Q10", {
              required: "Hackathon description is required",
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.Q10 && <Alert>{errors.Q10?.message}</Alert>}
        </div>
        <Tip>You can edit all later in the hackathon settings.</Tip>
        <div className="flex flex-row-reverse">
          <Button type="submit" disabled={loading} loadingstatus={loading}>
            {loading ? "Playing Kukoro..." : "Create"}
          </Button>
        </div>
      </form>
  );
};

export default CreateNew;