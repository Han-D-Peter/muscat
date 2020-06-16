import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { writeRouter, editRouter, detailRouter } from "./router";
import { handleHome } from "./controllers/controller";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.set("view engine", "pug");

app.get("/", handleHome);

app.use("/write", writeRouter);
app.use("/edit", editRouter);
app.use("/:id", detailRouter);

export default app;
