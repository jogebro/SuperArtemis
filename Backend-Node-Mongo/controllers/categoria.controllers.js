import Categoria from "../models/Categorias.js";

const obtenerCategorias = async (req, res) => {
    const categorias = await Categoria.find();
    res.json(categorias);
}

export {obtenerCategorias};