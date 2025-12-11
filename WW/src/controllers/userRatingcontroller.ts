import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.userRatings.findMany();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user ratings' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  if (!id) {
    return res.status(400).json({ error: 'Id has no value' });
  }

  try {
    const data = await prisma.userRatings.findUnique({  //skal muligvis ændres til userratings
      where: {
        id
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error); // Failed request log
    res.status(500).json({ error: 'Failed to fetch user ratings' });
  }
};



export const createRecord = async (req: Request, res: Response) => {
  const { userId, posterId, numStars } = req.body;
  
  

  if (!userId || !posterId || !numStars) {
    return res.status(400).json({ error: 'Alle felter skal udfyldes' });
  }

  try {

    const data = await prisma.userRatings.create({
      data: {
        userId: Number(userId),
        posterId: Number(posterId),
        numStars: Number(numStars)
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
  const { userId, posterId, numStars } = req.body // Deconstruerer form body objektet

  if(!id) {
    return res.status(400).json({ error: 'Id skal have en gyldig værdi' });
  }

  if(!userId || !posterId || !numStars) {
    return res.status(400).json({ error: 'Alle felter skal udfyldes' });
  }

  try {
    const data = await prisma.userRatings.update({
      where: { id },
      data: {
        userId: Number(userId),
        posterId: Number(posterId),
        numStars: Number(numStars)
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
    await prisma.userRatings.delete({
      where: { id },
    });

    res.status(200).json({ message: `user rating nr. ${id} er slettet` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kunne ikke slette user rating' });
  }
};