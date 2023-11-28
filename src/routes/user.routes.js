import { Router } from "express";
import {
  showUser,
  getOneUser,
  login,
  register,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";
import userValidate from "../middlewares/userValidation.js";
import loginValidaton from "../middlewares/loginValidation.js";
const router = Router();

router.route("/").get(showUser);
router.route("/Login").post([loginValidaton], login);
router.route("/Register").post([userValidate], register);
router
  .route("/User/:id")
  .get(getOneUser)
  .put([userValidate], updateUser)
  .delete(deleteUser);

export default router;
