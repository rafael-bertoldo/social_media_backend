import { z } from "zod";
import { createUserSchema, readUserSchema, updateUserSchema, userSchema } from "../schemas/user.schemas";

export type User = z.infer<typeof userSchema>
export type CreateUser = z.infer<typeof createUserSchema>
export type UpdateUser = z.infer<typeof updateUserSchema>
export type ReadUser = z.infer<typeof readUserSchema>
