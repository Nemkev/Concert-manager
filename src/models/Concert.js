import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Concert = new Schema({
  title: {
    type: Schema.Types.String,
    required: true
  },
  time: {
    type: Schema.Types.Date,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  description: {
    type: Schema.Types.String,
    required: true
  },
  place: {
    type: Schema.Types.String,
    required: true
  },
  price: {
    type: Schema.Types.Number,
    required: true
  }
});

export default mongoose.model("Concert", Concert);
