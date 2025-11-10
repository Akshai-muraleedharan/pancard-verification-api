"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getpancardData = void 0;
const joiValidation_1 = require("../utils/joiValidation");
const axios_1 = __importDefault(require("axios"));
const getpancardData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { error, value } = joiValidation_1.panNumberValidation.validate(req.body);
        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message });
            return;
        }
        const pancardUppercase = (_a = value.panCardNumber) === null || _a === void 0 ? void 0 : _a.toUpperCase().trim();
        const data = JSON.stringify({
            "panNumber": pancardUppercase
        });
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.invincibleocean.com/invincible/panPlus',
            headers: {
                'clientId': `${process.env.INVINCIBLE_CLIENT_ID}`,
                'secretKey': `${process.env.INVINCIBLE_SECRET_ID}`,
                'Content-Type': 'application/json'
            },
            data: data
        };
        const axiosResponse = yield (0, axios_1.default)(config);
        res.status(200).json({ success: true, message: "Data fetched successfully", data: axiosResponse.data });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        return;
    }
});
exports.getpancardData = getpancardData;
