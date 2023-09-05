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
    res.status(400).json({ status: false, message: "Error adding song." });
  }
};

export const deleteArtist = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const artist = await prisma.artist.findUnique({
      where: { id: parseInt(id) },
      include: { songs: true },
    });
    if (artist!.songs?.length > 0) {
      return res.status(400).json({
        status: false,
        message: "Artist has associated songs and cannot be deleted",
      });
    }
    const data = await prisma.artist.delete({ where: { id: parseInt(id) } });
    res
      .status(200)
      .json({ status: true, message: "Artist deleted Successfully", data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: "Error deleting song." });
  }
};

export const updateArtist = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const artist = await prisma.artist.update({
      where: { id: parseInt(id) },
      data: {
        name,
      },
    });
    res
      .status(200)
      .json({ status: true, message: "Artist updated Successfully", artist });
  } catch (error) {
    res.status(400).json({ status: false, message: "Error updating song." });
  }
};
