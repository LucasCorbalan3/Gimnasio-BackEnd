import mongoose, { Schema } from "mongoose";

const Classeschema = new Schema({
  nameClass: { required: true, type: String, minLength: 5, maxLength: 30 },
  Teacher: {
    type: String,
  },
  detailsClass: { required: true, type: String, minLength: 10, maxLength: 100 },
  dateClass: { required: true, type: String, minLength: 10, maxLength: 100 },
  timeClass: { required: true, type: String, minLength: 4, maxLength: 10 },
});

const Classes = mongoose.model("classes", Classeschema);
export default Classes;
