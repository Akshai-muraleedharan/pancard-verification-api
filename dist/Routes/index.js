"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const pancardController_1 = require("../controller/pancardController");
exports.router = express_1.default.Router();
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
exports.router.post("/pancard", pancardController_1.getpancardData);
