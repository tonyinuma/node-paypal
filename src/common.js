import { config } from "dotenv";
config();

export const PORT = 3000;
export const HOST = 'http://localhost:' + PORT;

export const PAYPAL_API_CLIENT_ID = process.env.PAYPAL_API_CLIENT_ID
export const PAYPAL_API_SECRET_ID = process.env.PAYPAL_API_SECRET_ID
export const PAYPAL_API = 'https://api-m.sandbox.paypal.com'
