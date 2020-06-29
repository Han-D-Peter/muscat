import multer from "multer";
import Content from "./models/Content";

const multerImage = multer({ dest: "uploads/images/" });

export const localsMiddleware = async (req, res, next) => {
  const topFive = await Content.find({});
  const topFiveSort = topFive.sort(function(a, b) {
    return a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0;
  });
  res.locals.user = req.user || null;
  res.locals.topFiveList = topFiveSort.slice(0, 5);
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
