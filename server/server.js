import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", apiRoutes);


// Base routes
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});