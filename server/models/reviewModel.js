import db from '../config/db.js';

export const createReview = async (name, role, review, rating, photo) => {
  try {
    const [result] = await db.execute(
      `INSERT INTO reviews
      (name, role, review, rating, photo)
      VALUES (?, ?, ?, ?, ?)`,
      [name, role, review, rating, photo]
    );

    return result.insertId;
  } catch (error) {
    console.error('❌ CREATE REVIEW DB ERROR:', error);
    throw error;
  }
};

export const getReviews = async () => {
  try {
    const [rows] = await db.execute(
      `SELECT id, name, role, review, rating, photo, created_at
       FROM reviews
       ORDER BY created_at DESC`
    );

    console.log('✅ REVIEWS FETCHED:', rows.length);

    return rows;
  } catch (error) {
    console.error('❌ GET REVIEWS DB ERROR:', error);
    throw error;
  }
};