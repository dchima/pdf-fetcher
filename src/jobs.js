import { Router } from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';



const router = Router();
const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, './uploads/');
  },
  filename: (req, file, next) => {
    next(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, next) => {
  if (file.mimetype === 'application/pdf') next(null, true);
  next(req.res.send({ message: 'huh'}), false);
}
const upload = multer({ storage, fileFilter });


router.post('/upload', upload.single('pdfFile'), async (req, res) => {
  try {
    console.log('Hi');
    // console.log(req);
    console.log(req.file);
    res.send({ message: 'done'});
  } catch (error) {
    res.send({ message: error });
  }
});

export default router;