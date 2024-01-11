import 'dotenv/config'
import { PrismaClient } from "@prisma/client";
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

export const prisma: PrismaClient = new PrismaClient()

export const cloudinaryConfig = async (path: string) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

  const upload = await cloudinary.uploader.upload(path, (err, result) => result)
  fs.unlink(path, (error) => {
    if(error) console.log(error)
  })

  return upload
}

 
 
 
