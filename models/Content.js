import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  /*fileUrl: {
    type: String,
    required: "File URL is required"
  },*/
  name: {
    type: String,
    required: "Name is required"
  },
  url: {
    type: String,
    required: "URL is required"
  },
  tags: [String],
  callNumber: {
    type: Number,
    required: "Callnumber is required"
  },
  startDate: {
    type: Date,
    required: "Starting date is required"
  },
  expiredDate: {
    type: Date,
    required: "Expired date is required"
  },
  minage: Number,
  maxage: Number,
  category: [
    {
      type: String,
      required: "Category is required"
    }
  ],
  range: [
    {
      type: String,
      required: "Range is required"
    }
  ],
  where: [String],
  orga: [String],
  rating: {
    type: Number,
    max: 5,
    index: true
  }
});

const model = mongoose.model("Content", ContentSchema);

export default model;
