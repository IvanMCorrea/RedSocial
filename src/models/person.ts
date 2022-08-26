import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlenght: 5,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlenght: 5,
  },
  phone: {
    type: String,
    minlenght: 5,
  },
  adress: {
    type: String,
    minlenght: 5,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  gender: {
    type: String,
  },
});

schema.plugin(uniqueValidator);

export default mongoose.model("Person", schema);
