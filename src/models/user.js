import mongoose, { Schema } from "mongoose";

const Userschema = new Schema({
  nameUser: { required: true, type: String, minLength: 4, maxLength: 25 },

  telefono: { required: true, type: Number, minLength: 10, maxLength: 13 },

  emailUser: {
    required: true,
    type: String,
    minLength: 10,
    maxLength: 30,
    unique: true,
  },

  passwordUser: {
    required: true,
    type: String,
    minLength: 6,
    unique: true,
  },

  rol: {
    type: String,
    enum: ["usuario", "profesor", "admin"],
    default: "usuario",
  },
});

const Users = mongoose.model("user", Userschema);
export default Users;
