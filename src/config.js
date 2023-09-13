import { config } from 'dotenv';
config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const PORT = process.env.PORT;
export const URL_DB = process.env.DB_URL;