import { Request, Response } from "express";
import prisma from "../db";

export const getAllArtists = async (req: Request, res: Response) => {
  try {
    console.log("Hello");
    const artist = await prisma.artist.findMany({
      orderBy: { id: "asc" },
      include: {
        songs: {
          select: {
            id: true,
            track: true,
          },
        },
      },
    });
    if (artist) {
      res.status(200).json({ status: true, artist });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: "Error getting song." });
  }
};

export const addArtist = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const artist = await prisma.artist.create({
      data: {
        name,
      },
    });
    res.status(200).json({ status: true, artist });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: "Error adding song." });
  }
};
