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
    maxLength: 25,
    unique: true,
  },

  isAdmin: { type: Boolean, required: true },

  isTeacher: { type: Boolean, required: false },
});

const Users = mongoose.model("user", Userschema);
export default Users;
