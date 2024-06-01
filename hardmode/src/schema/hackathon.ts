import { z } from "zod";

// Get hackathon:
export const hackathonSchema = z.object({
  nickname: z.string().min(3),
  discord: z.string().min(3),
  description: z.string(),
  userinterest: z.string(),
  age: z.string(),
});

export type allHackathons = z.TypeOf<typeof hackathonSchema>;

// -----------------------------------------------

// Create new hackathon:
export const newHackathonSchema = z.object({
  nickname: z.string().min(3),
  discord: z.string().min(3),
  description: z.string(),
  userinterest: z.string(),
  age: z.string(),
});

export type newHackathon = z.TypeOf<typeof newHackathonSchema>;

// -----------------------------------------------


