import { CreateUser, ReadUser, User } from '../interfaces/user.interfaces'
import { readUserSchema } from '../schemas/user.schemas'
import {prisma} from '../utils/index'

export const createUserService = async (data: CreateUser): Promise<ReadUser> => {
  const newUser: User = await prisma.user.create({
    data
  })

  return readUserSchema.parse(newUser)
}