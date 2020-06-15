import express from "express";

export const writeRouter = express.Router();

export const editRouter = express.Router();

export const detailRouter = express.Router();

writeRouter.get("/", (req, res) => res.send("write"));

editRouter.get("/", (req, res) => res.send("edit"));
editRouter.get("/:id", (req, res) => res.send("id edit"));

detailRouter.get("/", (req, res) => res.send("detail"));
