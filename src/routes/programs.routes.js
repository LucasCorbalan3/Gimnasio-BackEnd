import { Router } from "express";
import {
  showPrograms,
  createProgram,
  getOneProgram,
  updateProgram,
  deleteProgram,
} from "../controllers/programs.controllers";
import validateJWT from "../middlewares/validateJWT";
import programValidation from "../middlewares/programValidation";

const router = Router();

router.route("/").get(showPrograms);
router.route("/").post([validateJWT, programValidation], createProgram);

router
  .route("/Program/:id")
  .get(getOneProgram)
  .put([validateJWT], updateProgram)
  .delete([validateJWT], deleteProgram);

export default router;
