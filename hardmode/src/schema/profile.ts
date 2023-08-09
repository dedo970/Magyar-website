import { z } from "zod";

// Get hackathon:
export const UserSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  location: z.string().min(3),
  team: z.string().min(3),
  description: z.string().min(3),
});

export type AllUserSchema = z.TypeOf<typeof UserSchema>;

// -----------------------------------------------

// Create new hackathon:
export const newUserSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    location: z.string().min(3),
    team: z.string().min(3),
    description: z.string().min(3),
});

export type newUser = z.TypeOf<typeof newUserSchema>;

// -----------------------------------------------


