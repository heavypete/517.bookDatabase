import mongoose from "mongoose";

const simpleBookSchema = mongoose.Schema(
  {
    title: String,
    numberOfPages: String,
  },
  { versionKey: false }
);

const SimpleBookModel = mongoose.model("simplebook", simpleBookSchema);

export default SimpleBookModel;
