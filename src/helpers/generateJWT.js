import Jwt from "jsonwebtoken";

const generateJWT = (uid, newUser) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, newUser };
    Jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "1h" },
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
