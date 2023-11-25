import { Router } from "express";
import {
  showUser,
  getOneUser,
  login,
  register,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers";
import userValidate from "../middlewares/userValidation";
const router = Router();

router.route("/").get(showUser).post(login);
router.route("/NewUser").post([userValidate], register);
router.route("/User/:id").get(getOneUser).put(updateUser).delete(deleteUser);

export default router;
