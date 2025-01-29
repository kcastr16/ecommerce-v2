import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000; // Server port

// Middleware section
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',  // Replace with your React app's URL if different
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
  }));

// SQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API route to fetch vehicles
app.get('/getVehicles', (req, res) => {
    const query = 'SELECT * FROM vehicle';  // Ensure the query is correct
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: err.message });
      } else {
        console.log('Results from the database:', results);  // Log the results here
        res.json(results);
      }
    });
  });

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

  
