import { validationResult } from "express-validator";

const validationsResults = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.send({ errors: errors.array() });
  }
  next();
};

export default validationsResults;
