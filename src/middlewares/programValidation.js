import { check } from "express-validator";
import validationsResults from "../helpers/validationResult";

const programValidation = [
  check("nameProgram")
    .notEmpty()
    .withMessage("El campo nombre del programa es obligatorio")
    .isLength({ min: 10, max: 30 })
    .withMessage(
      "l campo nombre del programa debe tener entre 10 a 30 caracteres"
    )
    .trim(),
  check("price")
    .notEmpty()
    .withMessage("el precio es obligatorio")
    .custom((value) => {
      if (value >= 0 && value <= 10000) {
        return true;
      } else {
        throw new Error("El precio debe de estar entre 0 y 10000");
      }
    })
    .trim(),
  check("detailsProgram")
    .notEmpty()
    .withMessage("El campo detalle es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del detalle debe tener entre 2 a 100 caracteres")
    .trim(),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

export default programValidation;
