import { Router } from "express";
import {
    createInstrumento,
    getInstrumento,
    getInstrumentos,
    removeInstrumento,
    updateInstrumento,
} from "../controllers/instrumento.controller.js";


const router = Router();



//Lista instrumentos
router.get("/", getInstrumentos);

router.get("/:serieProducto", getInstrumento);

//Crea instumento
router.post("/", createInstrumento);

//Elimina instrumento
router.delete("/:id", removeInstrumento);


//actualiza instrumento
router.patch(
    "/:id",
    updateInstrumento
);

export default router;