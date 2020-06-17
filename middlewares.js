import multer from "multer";

const multerImage = multer({ dest: "uploads/images/" });

export const uploadImage = multerImage.single("imageFile");

export const localsMiddleware = (req, res, next) => {
  res.locals.user = req.user || null;
  console.log(req.user);
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
