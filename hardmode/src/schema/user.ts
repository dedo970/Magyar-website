import { z } from "zod";

// -----------------------------------------------

// Create new hackathon:
export const newUser = z.object({
  id: z.string().min(3),
  username: z.string().min(3),
  email: z.string(),
  password: z.string(),
  image: z.string(),
  uiid: z.string(),
});

export type newUser = z.TypeOf<typeof newUser>;

// -----------------------------------------------


