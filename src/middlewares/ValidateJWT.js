import Jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    res
      .status(401)
      .json({ Message: "Necesitas enviar un token en la consulta " });
  }
  try {
    const payload = Jwt.verify(token, process.env.SECRET_JWT);
    req._id = payload._uid;
    req.newUser = payload.newUser;
  } catch {
    res
      .status(401)
      .json({ message: "token inválido - autentificación fallida" });
  }
  next();
};

export default validateJWT;
