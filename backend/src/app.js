import express from 'express';
import pool from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/auth.js';
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());
app.use('/api/auth', authRoutes);


export default app;