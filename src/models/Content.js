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
  tags: {
    rawTags: {
      type: String
    },
    tagsArr: [String]
  },
  startDate: {
    rawStartDate: Date,
    everyday: Boolean,
    startyear: {
      type: Number
    },
    startmonth: {
      type: Number
    },
    startday: {
      type: Number
    }
  },
  expiredDate: {
    rawExpiredDate: Date,
    expiredyear: {
      type: Number
    },
    expiredmonth: {
      type: Number
    },
    expiredday: {
      type: Number
    }
  },
  outline: String,
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
  range: {
    type: String,
    required: "Range is required"
  },
  where: String,
  orga: String,
  rating: {
    type: Number
  },
  evaluation: String
});

const model = mongoose.model("Content", ContentSchema);

export default model;
