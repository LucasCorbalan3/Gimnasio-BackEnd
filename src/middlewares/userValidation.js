import { check } from "express-validator";
import validationsResults from "../helpers/validationResult";

const userValidate = [
  check("nameUser")
    .notEmpty()
    .withMessage("El campo Nombre es obligatorio")
    .isLength({ min: 4, max: 25 })
    .withMessage("El campo Nombre debe tener entre 4 a 25 caracteres")
    .trim(),
  check("telefono")
    .notEmpty()
    .withMessage("El campo Telefono es obligatorio")
    .isLength({ min: 10, max: 13 })
    .withMessage("El campo Telefono debe tener entre 10 a 13 caracteres")
    .trim()
    .isInt(),
  check("emailUser")
    .notEmpty()
    .withMessage("El campo Email es obligatorio")
    .isLength({ min: 10, max: 30 })
    .withMessage("El campo Email debe tener entre 10 a 30 caracteres")
    .trim(),
  check("passwordUser")
    .notEmpty()
    .withMessage("El campo Password es obligatorio")
    .isLength({ min: 6 })
    .withMessage("El campo Password debe tener como minimo 6 caracteres")
    .trim(),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];



export default userValidate ;
