import { Router } from "express";
import {
  showTeachers,
  createTeacher,
  getOneTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teachers.controllers";

const router = Router();

router.route("/Teacher").get(showTeachers).post(createTeacher);

router
  .route("/Teacher/:id")
  .get(getOneTeacher)
  .put(updateTeacher)
  .delete(deleteTeacher);

export default router;
