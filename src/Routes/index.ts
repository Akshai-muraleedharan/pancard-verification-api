import express from "express"
import type { Router } from "express"
import { getpancardData } from "../controller/pancardController";



export const router: Router = express.Router();

router.post("/pancard", getpancardData)
