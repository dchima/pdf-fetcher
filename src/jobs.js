import { Router } from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';



const router = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
})
const upload = multer({ storage });


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