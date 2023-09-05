import { Request,Response } from "express"
import prisma from "../db";

export const getAllSong = async(req:Request,res:Response)=>{
 try {
   const songs = await prisma.song.findMany({
    include:{
      artist:true
    }
   })
   res.status(200).json({status:true,songs})
 } catch (error) {
  res.status(400).json({status:false,message:"Error getting song."})
 }
}

export const addSong =async (req:Request,res:Response) =>{
  const {track,youtube_url,duration,artist_id,lyrics} = req.body;
  try {
   const song = await prisma.song.create({
    data:{
      track,
      artist_id,
      lyrics,
      youtube_url,
      duration
    }
   })
   res.status(200).json({status:true,song})
  } catch (error) {
    res.status(400).json({status:false,message:"Error adding song."})
  }
}


