import express from "express"
import type { Router } from "express"
import { getpancardData } from "../controller/pancardController";



export const router: Router = express.Router();


/**
 * @swagger
 * /pancard:
 *    post:
 *     summary: PAN card number verification
 *     tags: 
 *       -  verify PAN card number
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *            schema: 
 *              type: object 
 *              properties: 
 *                  panCardNumber:
 *                    type: string
 *                    example: ABCDE1234F
 * 
 *     responses:
 *        200:
 *          description: verify PAN card number
 *        
 */
router.post("/pancard", getpancardData)
