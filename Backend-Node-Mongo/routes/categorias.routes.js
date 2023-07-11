import express from "express";
import { obtenerCategorias, aggCategoria, borrarCategoria, actualizarCategoria } from "../controllers/categoria.controllers.js";

const router = express.Router();

router.get("/all", obtenerCategorias);
router.post("/add", aggCategoria);
router.delete("/del/:id", borrarCategoria);
router.patch("/upd/:id", actualizarCategoria);

export default router;