import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';
import { createReview, getReviews } from '../models/reviewModel.js';

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});

// GET REVIEWS
router.get('/', async (req, res) => {
  try {
    const reviews = await getReviews();

    res.json({
      success: true,
      reviews,
    });
  } catch (error) {
    console.error('❌ GET REVIEWS ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch reviews',
    });
  }
});

// ADD REVIEW
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const { name, role, review, rating } = req.body;

    if (!name || !review || !rating) {
      return res.status(400).json({
        success: false,
        message: 'Name, review and rating are required',
      });
    }

    const numericRating = Number(rating);

    if (numericRating < 1 || numericRating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5',
      });
    }

    let photoUrl = null;

    if (req.file) {
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'avana/reviews',
            resource_type: 'image',
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        stream.end(req.file.buffer);
      });

      photoUrl = uploadResult.secure_url;
    }

    const id = await createReview(
      name,
      role || 'Client',
      review,
      numericRating,
      photoUrl
    );

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully',
      review: {
        id,
        name,
        role: role || 'Client',
        review,
        rating: numericRating,
        photo: photoUrl,
      },
    });
  } catch (error) {
    console.error('❌ REVIEW SUBMISSION ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to submit review',
    });
  }
});

export default router;