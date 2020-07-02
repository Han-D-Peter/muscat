import Content from "../models/Content";

export const getAdmin = async (req, res) => {
  try {
    const contents = await Content.find({});
    res.render("admin", { contents });
  } catch (error) {
    console.log(error);
    res.render("admin", { contents: [] });
  }
};
