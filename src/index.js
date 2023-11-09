import env from "dotenv"
import { app } from "./app.js";
import fs from "fs";
import https from "https";
env.config();

const port = process.env.PORT || 8000

const certificate = fs.readFileSync( 'src/cert/cert.pem' );
const privateKey = fs.readFileSync( 'src/cert/cert.key' );

const server = https.createServer({
    key: privateKey,
    cert: certificate
}, app)
server.listen(port, ()=>{console.log('Server is up on port ',port)})