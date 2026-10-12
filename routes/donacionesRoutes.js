import express from "express";
import {
  obtenerDonaciones,
  crearDonacion
} from "../controllers/donacionesController.js";
import { validarDonacion } from "../middlewares/validarCampos.js";

const router = express.Router();

router.get("/", obtenerDonaciones);
router.post("/", validarDonacion, crearDonacion);

export default router;
