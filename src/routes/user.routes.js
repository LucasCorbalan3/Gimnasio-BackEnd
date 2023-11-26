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
import loginValidaton from "../middlewares/loginValidation";
const router = Router();

router.route("/").get(showUser);
router.route("/Login").post([loginValidaton], login);
router.route("/Register").post([userValidate], register);
router.route("/User/:id").get(getOneUser).put(updateUser).delete(deleteUser);

export default router;
