import { Request, Response } from 'express'
import { ReadUser } from '../interfaces/user.interfaces'
import { createUserService } from '../services/user.services'
import { createUserSchema } from '../schemas/user.schemas'
import { cloudinaryConfig } from '../utils'

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const {email, password, name } = req.body

  const upload = await cloudinaryConfig(req.file!.path)
  
  const data = createUserSchema.parse({
    email,
    name,
    password,
    avatar: upload.secure_url
  })
  const user: ReadUser = await createUserService(data)

  return res.status(201).json(user)
}