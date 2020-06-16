import express from "express";
import { postUpload, getUpload } from "./controllers/controller";
import { uploadImage } from "./middlewares";

export const writeRouter = express.Router();

export const editRouter = express.Router();

export const detailRouter = express.Router();

writeRouter.get("/", (req, res) => res.send("write"));

editRouter.get("/", getUpload);
editRouter.post("/write", uploadImage, postUpload);
editRouter.get("/:id", (req, res) => res.send("id edit"));

detailRouter.get("/", (req, res) => res.send("detail"));
