import type { Request, Response } from "express";
import { panNumberValidation } from "../utils/joiValidation";
import axios from "axios"

export const getpancardData = async (req: Request<{ panCardNumber: string }>, res: Response) => {
    try {
        const { error, value } = panNumberValidation.validate(req.body)

        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message })
            return;
        }

        const pancardUppercase = value.panCardNumber?.toUpperCase().trim();

        const data = JSON.stringify({
            "panNumber": pancardUppercase
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.INVINCIBLE_OCEAN_BASE_URL,
            headers: {
                'clientId': `${process.env.INVINCIBLE_CLIENT_ID}`,
                'secretKey': `${process.env.INVINCIBLE_SECRET_ID}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        const axiosResponse = await axios(config)


        res.status(200).json({ success: true, message: "Data fetched successfully", data: axiosResponse.data })

    } catch (error: any) {
        res.status(500).json({ success: false, message: "Internal server error" })
        return
    }
}