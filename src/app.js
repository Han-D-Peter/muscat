import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import {
  updateRouter,
  editRouter,
  detailRouter,
  userRouter,
  adminRouter,
  deleteRouter
} from "./router";

import "./passport";

const app = express();

const CokieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("/images", express.static(path.join(__dirname, "images")));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use("/", userRouter);

app.use("/update", updateRouter);
app.use("/edit", editRouter);
app.use("/detail", detailRouter);
app.use("/admin", adminRouter);
app.use("/delete", deleteRouter);

export default app;
