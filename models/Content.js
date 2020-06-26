import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
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
    startyear: {
      type: Number,
      required: "year is required"
    },
    startmonth: {
      type: Number,
      required: "month is required"
    },
    startday: {
      type: Number,
      required: "day is required"
    }
  },
  expiredDate: {
    expiredyear: {
      type: Number,
      required: "year is required"
    },
    expiredmonth: {
      type: Number,
      required: "month is required"
    },
    expiredday: {
      type: Number,
      required: "day is required"
    }
  },
  minage: Number,
  maxage: Number,
  jobsupport: {
    type: String,
    required: "jobsupport is required"
  },
  incruitSite: {
    type: String,
    required: "required"
  },
  staysupport: {
    type: String,
    required: "required"
  },
  economysupport: {
    type: String,
    required: "required"
  },
  startupsupport: {
    type: String,
    required: "required"
  },
  scholarship: {
    type: String,
    required: "required"
  },
  eduprogram: {
    type: String,
    required: "required"
  },
  range: [
    {
      type: String,
      required: "Range is required"
    }
  ],
  where: [String],
  orga: [String],
  rating: {
    type: String
  }
});

const model = mongoose.model("Content", ContentSchema);

export default model;
