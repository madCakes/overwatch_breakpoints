import express from "express";
import cors from "cors";

// Apps
const app = express();

// middleware
app.use(cors());
app.use(express.json());

export default app;
