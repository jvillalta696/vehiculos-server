import env from "dotenv"
import { app } from "./app.js";
env.config();

const port = process.env.PORT || 8000


app.listen(port, ()=>{console.log('Server is up on port ',port)})