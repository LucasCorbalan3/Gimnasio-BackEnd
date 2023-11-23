import { Router } from "express";
import {
  showClasses,
  createClass,
  getOneClass,
  updateClass,
  deleteClass,
} from "../controllers/class.controllers";

const router = Router();

router.route("/Class").get(showClasses).post(createClass);

router
  .route("/Class/:id")
  .get(getOneClass)
  .put(updateClass)
  .delete(deleteClass);

export default router;
