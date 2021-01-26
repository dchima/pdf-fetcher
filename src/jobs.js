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
const upload = multer({ storage: storage });


router.post('/upload', upload.single('pdfFile'), async (req, res) => {
  try {
    console.log('Hi');
    // console.log(req);
    console.log(req.file);
  } catch (error) {
    return error;
  }
});

export default router;