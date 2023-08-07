import { z } from "zod";

// Get hackathon:
export const hackathonSchema = z.object({
  id: z.string(),
  Q1: z.string().min(3),
  Q2: z.string().min(3),
  Q3: z.string().min(3),
  Q4: z.string().min(3),
  Q5: z.string().min(3),
  Q6: z.string().min(3),
  Q7: z.string().min(3),
  Q8: z.string().min(3),
  Q9: z.string().min(3),
  Q10: z.string().min(3),
});

export type allHackathons = z.TypeOf<typeof hackathonSchema>;

// -----------------------------------------------

// Create new hackathon:
export const newHackathonSchema = z.object({
    id: z.string(),
    Q1: z.string().min(3),
    Q2: z.string().min(3),
    Q3: z.string().min(3),
    Q4: z.string().min(3),
    Q5: z.string().min(3),
    Q6: z.string().min(3),
    Q7: z.string().min(3),
    Q8: z.string().min(3),
    Q9: z.string().min(3),
    Q10: z.string().min(3),
});

export type newHackathon = z.TypeOf<typeof newHackathonSchema>;

// -----------------------------------------------

