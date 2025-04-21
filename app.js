import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path'; // Import the 'path' module
import { fileURLToPath } from 'url'; // Import fileURLToPath
dotenv.config({ path: './config/.env' });
const app=express();

connectDB();

const PORT=process.env.PORT || 3030;

import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', urlsRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});