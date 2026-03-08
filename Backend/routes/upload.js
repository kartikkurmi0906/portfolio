const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// 1. Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Make sure you have a folder named 'uploads' in your backend root!
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    // Rename file to prevent duplicates: timestamp-originalName
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // Limit: 5MB
});

// 2. The Route Wrapper
router.post('/', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No_File_Selected" });
    }

    // This URL is what gets saved in your Database
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    
    res.json({ 
      message: "Upload_Successful",
      imageUrl: imageUrl 
    });
  } catch (err) {
    res.status(500).json({ error: "Server_Disk_Error" });
  }
});

module.exports = router;