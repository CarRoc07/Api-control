import { config } from 'dotenv';
config();

export const JWT_SECRET = process.env.JWT_SECRET || 'keySecretOfJWT';
export const PORT = process.env.PORT || 4000;
export const URL_DB = process.env.DB_URL || 'mongodb+srv://carlovhd:8kueBwCjdAZVMGQi@practica.zdoowhy.mongodb.net/stock?retryWrites=true&w=majority';