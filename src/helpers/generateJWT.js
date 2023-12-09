import Jwt from "jsonwebtoken";

const generateJWT = (uid, newUser, rol, emailUser) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, newUser, rol, emailUser };
    Jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          reject("Error al generar el token");
        }
        resolve(token);
      }
    );
  });
};
export default generateJWT;
