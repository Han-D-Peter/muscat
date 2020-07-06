import Content from "../models/Content";
import User from "../models/User";
import passport from "passport";
import dotenv from "dotenv";

export const handleHome = async (req, res) => {
  try {
    const contents = await Content.find({
      $or: [
        {
          "expiredDate.rawExpiredDate": { $gte: new Date() }
        },
        { "startDate.everyday": true }
      ]
    });
    console.log(contents);
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
      startDate,
      expiredDate,
      outline,
      minage,
      maxage,
      jobsupport,
      incruitSite,
      staysupport,
      economysupport,
      startupsupport,
      scholarship,
      eduprogram,
      range,
      where,
      orga,
      rating,
      evaluation
    },
    file: { location }
  } = req;
  const tagsArr = tags.split(",");
  const startDateLength = startDate.length;

  const startDateFromString = new Date(startDate);
  const expiredDateFromString = new Date(expiredDate);
  if (startDateLength === 0) {
    var everyday = true;
    var startyear = 0;
    var startmonth = 0;
    var startday = 0;
  } else {
    var startyear = startDateFromString.getFullYear();
    var startmonth = startDateFromString.getMonth() + 1;
    var startday = startDateFromString.getDate();
  }
  if (expiredDate.length !== 0) {
    var expiredyear = expiredDateFromString.getFullYear();
    var expiredmonth = expiredDateFromString.getMonth() + 1;
    var expiredday = expiredDateFromString.getDate();
  } else {
    var expiredyear = 0;
    var expiredmonth = 0;
    var expiredday = 0;
  }

  const newContent = await Content.create({
    fileUrl: location,
    name,
    url,
    tags: {
      rawTags: tags,
      tagsArr
    },
    startDate: {
      rawStartDate: startDate,
      everyday,
      startyear,
      startmonth,
      startday
    },
    expiredDate: {
      rawExpiredDate: expiredDate,
      expiredyear,
      expiredmonth,
      expiredday
    },
    outline,
    minage,
    maxage,
    jobsupport,
    incruitSite,
    staysupport,
    economysupport,
    startupsupport,
    scholarship,
    eduprogram,
    range,
    where,
    orga,
    rating,
    evaluation
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
