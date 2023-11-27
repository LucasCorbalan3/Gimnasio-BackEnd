import { Router } from "express";
import {
  showClasses,
  createClass,
  getOneClass,
  updateClass,
  deleteClass,
} from "../controllers/class.controllers";

const router = Router();

router.route("/").get(showClasses).post(createClass);

router
  .route("/class/:id")
  .get(getOneClass)
  .put(updateClass)
  .delete(deleteClass);

export default router;
