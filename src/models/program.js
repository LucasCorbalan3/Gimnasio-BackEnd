import mongoose, { Schema } from "mongoose";

const programSchema = new Schema({
  nameProgram: { required: true, type: String, minLength: 5, maxLength: 50 },
  price: {
    type: String,
    require: true,
    min: 0,
    max: 10000,
  },
  detailsProgram: { required: true, type: String, minLength: 10, maxLength: 100 },
});

const program = mongoose.model("program", programSchema);
export default program;
