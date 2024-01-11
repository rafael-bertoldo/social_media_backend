import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares";
import { createUserController } from "../controllers/user.controllers";

export const userRouter: Router = Router()

userRouter.post('/create', upload.single('avatar'), createUserController)