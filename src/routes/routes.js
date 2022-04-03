import express from "express";
import {
  getIndex,
  getDetalhes,
  getDeletar,
  getEditar,
  postEditar,
  getCriar,
  postCriar,
} from "../controller/PersonagemController.js";

export const routes = express.Router();

routes.get("/", getIndex);
routes.get("/detalhes/:id", getDetalhes);
routes.get("/apagar/:id", getDeletar);

routes.get("/editar/:id", getEditar);
routes.post("/editar/:id" , postEditar);

routes.get("/criar", getCriar);
routes.post("/criar" , postCriar)
