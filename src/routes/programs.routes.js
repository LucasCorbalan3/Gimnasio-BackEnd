import { Router } from "express";
import {
  showPrograms,
  createProgram,
  getOneProgram,
  updateProgram,
  deleteProgram,
} from "../controllers/programs.controllers.js";
import validateJWT from "../middlewares/validateToken.js";
import programValidation from "../middlewares/programValidation.js";

const router = Router();

router.route("/").get(showPrograms);
router.route("/").post([validateJWT, programValidation], createProgram);


router
  .route("/Program/:id")
  .get(getOneProgram)
  .put(validateJWT, updateProgram)
  .delete(validateJWT, deleteProgram);

export default router;
