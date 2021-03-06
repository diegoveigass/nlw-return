import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('http running in port 3333');
});

app.post('/feedbacks', async (req, res) => {
  const { comment, type, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});
