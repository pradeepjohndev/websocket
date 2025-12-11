import express from 'express';
import 'dotenv/config';
const PORT = process.env.PORT;
const app = express();

// Built-in middleware to parse JSON
app.use(express.json());

// POST route for /data
app.post('/data', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

// GET route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
