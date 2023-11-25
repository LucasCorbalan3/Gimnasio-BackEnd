import mongoose from "mongoose";
import 'dotenv/config'

const url = "mongodb://127.0.0.1:27017/GymnasioBD";

//const URI = process.env.MONGODB_URL
//console.log(URI);


mongoose.connect(url);
//mongoose.connect(URI);

const connetion = mongoose.connection;

connetion.once("open", () => {
  console.log("BD Conectada");
});

