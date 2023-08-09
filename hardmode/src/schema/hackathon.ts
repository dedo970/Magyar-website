import { z } from "zod";

// Get hackathon:
export const hackathonSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  description: z.string(),
  location: z.string(),
  team: z.string(),
});

export type allHackathons = z.TypeOf<typeof hackathonSchema>;

// -----------------------------------------------

// Create new hackathon:
export const newHackathonSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  description: z.string(),
  location: z.string(),
  team: z.string(),
});

export type newHackathon = z.TypeOf<typeof newHackathonSchema>;

// -----------------------------------------------


