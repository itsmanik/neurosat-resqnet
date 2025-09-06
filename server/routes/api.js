import express from "express";
import { sampleEndpoint } from "../controllers/exampleController.js";

const router = express.Router();

router.get("/hello", sampleEndpoint);

export default router;
