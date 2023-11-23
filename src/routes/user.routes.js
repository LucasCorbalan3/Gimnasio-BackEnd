import { Router } from "express";
import {
  showUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";

const router = Router();

router.route("/User").get(showUsers).post(createUser);

router
  .route("/User/:id")
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
