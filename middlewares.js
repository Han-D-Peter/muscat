import multer from "multer";

const multerImage = multer({ dest: "uploads/images/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.user = req.user || null;
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
