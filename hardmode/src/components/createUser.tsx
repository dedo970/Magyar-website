import { api } from "~/server/api";
import { useState } from "react";
import type { THackathon } from "~/types/user.type";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { Plus } from "~/ui/icons";
import { Modal, Button, Alert, Tip } from "~/ui";
import { inputStyles } from "~/ui/input";
import { toast } from "sonner";
import confetti from "canvas-confetti";

const CreateUser = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  let dataId = nanoid(6);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<THackathon>();

  const { mutate } = api.userProfile.createUser.useMutation({
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
    <>
<Modal btn={<Button>Create User</Button>} title={"Create User"}>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name">id:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("id", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          />
          {errors.id && <Alert>{errors.id?.message}</Alert>}
        </div>

        <div className="mb-6">
          <label htmlFor="name">Username:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("username", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          />
          {errors.username && <Alert>{errors.username?.message}</Alert>}
        </div>

        <div className="mb-6">
          <label htmlFor="name">Username:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("email", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          />
          {errors.email && <Alert>{errors.email?.message}</Alert>}
        </div>

        <div className="mb-6">
          <label htmlFor="name">Password:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("password", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          />
          {errors.password && <Alert>{errors.password?.message}</Alert>}
        </div>

        
        <div className="mb-6">
          <label htmlFor="name">image:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("image", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          />
          {errors.image && <Alert>{errors.image?.message}</Alert>}
        </div>

        <div className="mb-6">
          <label htmlFor="name">uiid:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("uiid", {
              required: "Hackathon name is required"
            })}
          />
          {errors.uiid && <Alert>{errors.uiid?.message}</Alert>}
        </div>

        <div className="mb-6">
          <label htmlFor="name">role:</label>
          <select
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("role", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          >
        <option selected>Choose role</option>
  <option value="Admin">Admin</option>
  <option value="Moderator">Moderator</option>
  <option value="User">User</option>
</select>
          {errors.role && <Alert>{errors.role?.message}</Alert>}
        </div>


        <div className="flex flex-row-reverse">
          <Button type="submit" disabled={loading} loadingstatus={loading}>
            {loading ? "Playing Kukoro..." : "Create"}
          </Button>
        </div>
      </form>
</Modal>
</>
  );
};

export default CreateUser;