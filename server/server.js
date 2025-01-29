import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';  // Import these to get __dirname
import { dirname } from 'path';      // Import to resolve the directory

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Use the port Heroku provides

// Get the current directory path equivalent to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware section
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,  // Make sure your React app's URL is set in .env
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

// Serve static files from React app's build directory after building
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all other requests and serve the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});s