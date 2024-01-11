import { z, string, boolean, object } from 'zod'

export const userSchema = object({
  id: string(),
  email: string().email('Please insert a valid email format'),
  password: string(),
  name: string().min(3),
  avatar: string(),
  active: boolean().default(false),
  recover_password: string()
})

export const createUserSchema = userSchema.omit({
  id: true,
  active: true,
  recover_password: true
})

export const updateUserSchema = userSchema.pick({
  email: true,
  name: true,
  avatar: true
}).partial()

export const readUserSchema = userSchema.omit({
  password: true,
  recover_password: true
})