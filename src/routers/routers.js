import express from "express"
import { getIndex, cadastro, postar } from "../controller/Controllador.js";

export const routers = express.Router()

routers.get("/", getIndex);

routers.get("/cadastro", cadastro);

routers.post("/create", postar);