import express from "express";
import {
  postUpload,
  getUpload,
  detail,
  handleHome,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout
} from "./controllers/controller";
import { uploadImage, onlyPublic, onlyPrivate } from "./middlewares";
import {
  getAdmin,
  getAdminUpdate,
  postAdminUpdate,
  deleteContent
} from "./controllers/admincontroller";

export const userRouter = express.Router();

export const updateRouter = express.Router();

export const editRouter = express.Router();

export const detailRouter = express.Router();

export const adminRouter = express.Router();

export const deleteRouter = express.Router();

userRouter.get("/", handleHome);

userRouter.get("/join", onlyPublic, getJoin);
userRouter.post("/join", onlyPublic, postJoin, postLogin);

userRouter.get("/login", onlyPublic, getLogin);
userRouter.post("/login", onlyPublic, postLogin);

userRouter.get("/logout", onlyPrivate, logout);

updateRouter.get("/:id", onlyPrivate, getAdminUpdate);
updateRouter.post("/:id", onlyPrivate, postAdminUpdate);

editRouter.get("/", onlyPrivate, getUpload);
editRouter.post("/write", onlyPrivate, uploadImage, postUpload);
editRouter.get("/:id", (req, res) => res.send("id edit"));

detailRouter.get("/:id", detail);

adminRouter.get("/", onlyPrivate, getAdmin);

deleteRouter.get("/:id", onlyPrivate, deleteContent);
