import express, { json } from "express";
import cors from "cors"
import morgan from "morgan";
import { router } from "./routers/main.router.js";


export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(json());
app.use("/api/v1",router);

