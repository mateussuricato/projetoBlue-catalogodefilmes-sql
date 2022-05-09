import express from "express"
import { getIndex, cadastro, postCriar, deletar, getEditar, postEditar, getDetalhes } from "../controller/Controllador.js";

export const routers = express.Router()

routers.get("/", getIndex);

routers.get("/cadastro", cadastro);

routers.post("/create", postCriar);

routers.get("/delete/:id", deletar)

routers.get('/editar/:id', getEditar)

routers.post('/editar/:id', postEditar)

routers.get('/detalhes/:id', getDetalhes)