import Content from "../models/Content";

export const handleHome = async (req, res) => {
  try {
    const contents = await Content.find({});
    res.render("home", { contents });
  } catch (error) {
    console.log(error);
    res.render("home", { contents: [] });
  }
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
  console.log(req.file);
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
