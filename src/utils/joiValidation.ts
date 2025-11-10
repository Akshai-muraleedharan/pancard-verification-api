import Joi from "joi";
import { pancard } from "../interface/interface";



export const panNumberValidation = Joi.object<pancard>({
    panCardNumber: Joi.string().required().pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/).messages({
        "string.pattern.base": "Enter a valid PAN (e.g., ABCDE8757A)",
        "string.empty": "PAN number is required"
    })
})