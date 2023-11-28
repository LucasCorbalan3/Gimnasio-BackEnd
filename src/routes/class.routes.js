import { Router } from "express";
import {
  showClasses,
  createClass,
  getOneClass,
  updateClass,
  deleteClass,
} from "../controllers/class.controllers";
import validateJWT from "../middlewares/validateJWT";
const router = Router();

router.route("/").get(showClasses);
router.post("/", [validateJWT], createClass);

router
  .route("/class/:id")
  .get(getOneClass)
  .put(updateClass)
  .delete(deleteClass);

export default router;
