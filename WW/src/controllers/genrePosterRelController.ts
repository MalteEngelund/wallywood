import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.genrePosterRel.findMany({
      include: {
        genre: true,
        poster: true
      }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch genrePosterRel' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if (!id) {
    return res.status(400).json({ error: 'Id has no value' });
  }

  try {
    const data = await prisma.genrePosterRel.findUnique({
      where: {
        id
      },
      select: {
        genre: true,
        poster: true
      }
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error); // Failed request log
    res.status(500).json({ error: 'Failed to fetch genrePosterRel' });
  }
};



export const createRecord = async (req: Request, res: Response) => {
  const { genreId, posterId } = req.body;
  console.log(req.body)
  if (!genreId || !posterId) {
    return res.status(400).json({ error: 'Alle felter skal udfyldes' });
  }

  try {

    const data = await prisma.genrePosterRel.create({
      data: {
        genreId: Number(genreId),
        posterId: Number(posterId)
      }
    });

    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Noget gik galt i serveren' });
  }
};



export const updateRecord = async (req: Request, res: Response) => {
  const id = Number(req.params.id) // Sikrer at id er et tal
  const { genreId, posterId } = req.body // Deconstruerer form body objektet

  if(!id) {
    return res.status(400).json({ error: 'Id skal have en gyldig værdi' });
  }

  if(!genreId || !posterId) {
    return res.status(400).json({ error: 'Alle felter skal udfyldes' });
  }

  try {
    const data = await prisma.genrePosterRel.update({
      where: { id },
      data: {
        genreId: Number(genreId),
        posterId: Number(posterId)
      }
    })

    return res.status(201).json(data);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Noget gik galt i serveren' });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    await prisma.genrePosterRel.delete({
      where: { id },
    });

    res.status(200).json({ message: `genrePosterRel nr. ${id} er slettet` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kunne ikke slette genrePosterRel' });
  }
};