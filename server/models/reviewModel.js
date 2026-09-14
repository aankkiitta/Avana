import db from '../config/db.js';

export const createReview = async (name, role, review, rating, photo) => {
  const [result] = await db.execute(
    `INSERT INTO reviews
    (name, role, review, rating, photo)
    VALUES (?, ?, ?, ?, ?)`,
    [name, role, review, rating, photo]
  );

  return result.insertId;
};

export const getReviews = async () => {
  const [rows] = await db.execute(
    `SELECT id, name, role, review, rating, photo, created_at
     FROM reviews
     ORDER BY created_at DESC`
  );

  return rows;
};