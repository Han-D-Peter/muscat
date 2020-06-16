import multer from "multer";

const multerImage = multer({ des: "images/" });

export const uploadImage = multerImage.single("imageFile");
