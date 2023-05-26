import { Router } from "express";
import { login, registrar, registro, reset } from "../controllers/usuario.controller.js";

const router = Router()

router.route("/login").get(login)
    
router.route("/registro").get(registro).post(registrar)

router.route("/reset").get(reset)

export default router