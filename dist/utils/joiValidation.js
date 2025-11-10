"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.panNumberValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.panNumberValidation = joi_1.default.object({
    panCardNumber: joi_1.default.string().required().pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/).messages({
        "string.pattern.base": "Enter a valid PAN (e.g., ABCDE8757A)",
        "string.empty": "PAN number is required"
    })
});
