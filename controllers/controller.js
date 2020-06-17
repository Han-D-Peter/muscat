import Content from "../models/Content";
import User from "../models/User";
import passport from "passport";
import dotenv from "dotenv";

export const handleHome = async (req, res) => {
  try {
    const contents = await Content.find({});
    res.render("home", { contents });
  } catch (error) {
    console.log(error);
    res.render("home", { contents: [] });
  }
};

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = async (req, res, next) => {
  /*const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join");
  } else {*/
  try {
    const password = process.env.PASSWORD;
    const user = await User({
      name: "admin",
      email: "admin@admin.com"
    });
    await User.register(user, password);
    next();
  } catch (error) {
    console.log("error");
    res.redirect("/");
  }
  /*}*/
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: "/login",
  successRedirect: "/"
});

export const logout = (req, res) => {
  //req.flash("info", "Logged out, see you later");
  req.logout();
  res.redirect("/");
};

export const getUpload = (req, res) => res.render("edit");

export const postUpload = async (req, res) => {
  const {
    body: {
      name,
      url,
      tags,
      callNumber,
      startDate,
      expiredDate,
      minage,
      maxage,
      category,
      range,
      where,
      orga,
      rating
    },
    file: { path }
  } = req;

  const newContent = await Content.create({
    fileUrl: path,
    name,
    url,
    tags,
    callNumber,
    startDate,
    expiredDate,
    minage,
    maxage,
    category,
    range,
    where,
    orga,
    rating
  });
  res.redirect("/");
};

export const detail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const contentElement = await Content.findById(id);
    res.render("detail", { contentElement });
  } catch (error) {
    res.redirect("/");
  }
};

export const getAdmin = (req, res) => {
  res.send("adminpage");
};
