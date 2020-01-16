import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DEFAULT_ROOM_SCHEMAS = [
  {
    placeSchema: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 0, 2, 2, 0, 0, 3, 3, 3]
    ]
  },
  {
    placeSchema: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 2, 2, 0, 2, 2, 0]
    ]
  }
];

const Room = new Schema({
  placeSchema: [
    [
      {
        price: { type: Schema.Types.Number },
        id: { type: Schema.Types.String },
        booked: { type: Schema.Types.Boolean }
      }
    ]
  ],

  name: {
    type: Schema.Types.String
  }
});

export default mongoose.model("Room", Room);
