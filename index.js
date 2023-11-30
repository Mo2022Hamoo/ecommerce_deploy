import express from "express";
import { bootstrap } from "./src/index.routes.js";
const app = express();
import { startjob } from "./src/utils/reqestApi.js";

//connect with config.env
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

//hellow
startjob();
bootstrap(app, express);
