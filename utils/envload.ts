// utils/env.ts
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../env/.env') }); 

export const ENV = {
    BASE_URL: process.env.BASE_URL as string,
    user: process.env.user as string,
    passwd: process.env.passwd as string,
};
