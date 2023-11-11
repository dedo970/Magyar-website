import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import type { ILogin } from "~/validation/auth";
import { Tip } from "~/ui";
import Error from "~/ui/error";

const LoginForm = () => {
  const router = useRouter();
  const { error } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    await signIn("credentials", { ...data, callbackUrl: "/dashboard" });
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="max-width: 350px; margin: auto;">
      <p className="mt-2 text-blob">Prihlás se do svojho Magyar účtu.</p>
        {error && (
          <p className="text-center text-red-600">Login failed, try again!</p>
        )}
        <div className="inp fwidth">
        <input
          className="Nick"
          type="text"
          {...register("email", { required: true })}
        />
        {errors.email && <span>error</span>}
        <label>Herný nick</label>
        </div>
        <div className="inp fwidth">
        
        <input
          className="Password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Zle heslo</span>}
        <label>Heslo</label>
        </div>
        <div className="text-center">
        <input type="submit" className="prihlaska-btn" value={"Prihlásiť sa"} />
        </div>
      </form>
  );
};

export default LoginForm;