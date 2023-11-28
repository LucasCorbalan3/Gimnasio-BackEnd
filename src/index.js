import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./database";
import router from "./routes/user.routes.js";
import clas from "./routes/class.routes.js";
import program from "./routes/programs.routes.js";
import "dotenv/config";

const app = express();

app.set("port", process.env.PORT || 4002);

//middelware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/v1", router);
app.use("/v1/class", clas);
app.use("/v1/program", program);

app.listen(app.get("port"), () => {
  console.log("====================================");
  console.log("Estoy en el puerto " + app.get("port"));
  console.log("====================================");
});
