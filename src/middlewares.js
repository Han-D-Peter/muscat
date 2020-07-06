import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import Content from "./models/Content";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: "ap-northeast-1"
});

const multerImage = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "muscat/uploads"
  })
});

export const localsMiddleware = async (req, res, next) => {
  const topFive = await Content.find({
    "expiredDate.rawExpiredDate": { $gte: new Date() }
  });
  /*const topFiveSort = topFive.sort(function(a, b) {
    return a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0;
  });
  res.locals.user = req.user || null;
  res.locals.topFiveList = topFiveSort.slice(0, 5);*/
  const topFiveScoreSix = topFive.filter(item => item.rating === 6);
  res.locals.user = req.user || null;
  res.locals.topFiveList = topFiveScoreSix.slice(0, 5);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

export const uploadImage = multerImage.single("imageFile");
