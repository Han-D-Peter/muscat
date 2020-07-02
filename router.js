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
import { getAdmin } from "./controllers/admincontroller";

export const userRouter = express.Router();

export const writeRouter = express.Router();

export const editRouter = express.Router();

export const detailRouter = express.Router();

export const adminRouter = express.Router();

userRouter.get("/", handleHome);

userRouter.get("/join", onlyPublic, getJoin);
userRouter.post("/join", onlyPublic, postJoin, postLogin);

userRouter.get("/login", onlyPublic, getLogin);
userRouter.post("/login", onlyPublic, postLogin);

userRouter.get("/logout", onlyPrivate, logout);

writeRouter.get("/", (req, res) => res.send("write"));

editRouter.get("/", onlyPrivate, getUpload);
editRouter.post("/write", onlyPrivate, uploadImage, postUpload);
editRouter.get("/:id", (req, res) => res.send("id edit"));

detailRouter.get("/:id", detail);

adminRouter.get("/", onlyPrivate, getAdmin);
