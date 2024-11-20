import { Router } from "express";
import { crearDatos, obtenerDatos } from "../controller/cantante.js";
const router = Router()

router.get('/cantante', obtenerDatos)
router.post('/cantante', crearDatos)


export default router;