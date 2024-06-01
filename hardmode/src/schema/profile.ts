import { z } from "zod";

// Get hackathon:
export const UserSchema = z.object({
  nickname: z.string().min(3),
  discord: z.string().min(3),
  description: z.string().min(3),
  age: z.string().min(3),
  userinterest: z.string().min(3),
});

export type AllUserSchema = z.TypeOf<typeof UserSchema>;

// -----------------------------------------------

// Create new hackathon:
export const newUserSchema = z.object({
  nickname: z.string().min(3),
  discord: z.string().min(3),
  description: z.string().min(3),
  age: z.string().min(3),
    userinterest: z.string().min(3),
});

export type newUser = z.TypeOf<typeof newUserSchema>;

// -----------------------------------------------


