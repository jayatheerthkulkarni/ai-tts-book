/* This is the entry point of the codebase */ 
/* Has the type module so look out for imports */ 
/* Please create a .env file and fill out the following
   details
   1. PORT  
*/
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
/* Path setup */
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const client_dir = path.join(__dirname, "../client");

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../client')));

app.get("/", (req, res) =>{
    res.sendFile(path.join(client_dir, "/test.html"));
});

/* This API takes pdf img and txt files from the user and stores them into  */
app.post("/upload",(req,res) =>{
    
});

/* Listening port assumed at 8888 feel free to choose any port */
app.listen(port, () =>{
    console.log(`App running in port ${port} visit http://localhost:${port}`);
});