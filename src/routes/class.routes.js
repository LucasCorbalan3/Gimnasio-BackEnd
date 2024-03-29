import { Router } from "express";
import {
  showClasses,
  createClass,
  getOneClass,
  updateClass,
  deleteClass,
} from "../controllers/class.controllers.js";
import validateJWT from "../middlewares/validateToken.js";
const router = Router();

router.route("/").get(showClasses);
router.route("/").post(validateJWT, createClass);

router
  .route("/class/:id")
  .get(getOneClass)
  .put(validateJWT, updateClass)
  .delete(validateJWT, deleteClass);

export default router;
