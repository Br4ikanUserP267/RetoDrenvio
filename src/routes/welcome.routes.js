import express from "express";
import { getWelcomeMessage } from "../helpers/index.helper.js";

const router = express.Router();

router.get("/", getWelcomeMessage);

export default router;
