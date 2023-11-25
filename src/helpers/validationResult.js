import { validationResult } from "express-validator";

const validationsResults = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    next();
  }
};

export default validationsResults;
