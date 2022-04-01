import express from 'express';
import { getIndex } from '../controller/PersonagemController.js'

export const routes = express.Router();


routes.get("/" , getIndex)


