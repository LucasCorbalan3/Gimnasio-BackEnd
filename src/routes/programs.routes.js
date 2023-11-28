import { Router } from "express";
import {
  showPrograms,
  createProgram,
  getOneProgram,
  updateProgram,
  deleteProgram,
} from "../controllers/programs.controllers";

const router = Router();

router.route("/").get(showPrograms);
router.route("/").post(createProgram);

router
  .route("/Programs/:id")
  .get(getOneProgram)
  .put(updateProgram)
  .delete(deleteProgram);

export default router;
