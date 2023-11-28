import { check } from "express-validator";


const loginValidaton = [
  check("emailUser")
    .notEmpty()
    .withMessage("Para Loguearse el campo Email es obligatorio")
    .isLength({ min: 10, max: 30 })
    .withMessage("l campo Email debe tener entre 10 a 30 caracteres")
    .trim(),
  check("passwordUser")
    .notEmpty()
    .withMessage("El campo Password es obligatorio")
    .isLength({ min: 6 })
    .withMessage("El campo Password debe tener como minimo 6 caracteres")
    .trim(),
];

export default loginValidaton;
