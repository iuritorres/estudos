import express from 'express';
import pool from '../db/db.js';

const router = express.Router();

router.get('/', (request, response) => {
  pool.query('SELECT * FROM posts', (error, rows) => {
    if (error) throw error;
    response.json(rows);
  });
});

router.get('/:id', (request, response) => {
  const { id } = request.params;

  pool.query('SELECT * FROM posts WHERE ID = ?', [id], (error, rows) => {
    if (error) throw error;
    response.json(rows[0]);
  }) 
});

export default router;