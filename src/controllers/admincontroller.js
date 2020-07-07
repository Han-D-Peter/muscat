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

export const getAdminUpdate = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const contentElement = await Content.findById(id);
    res.render("update", { contentElement });
    console.log(contentElement.fileUrl);
  } catch (error) {
    res.redirect("/");
  }
};

export const postAdminUpdate = async (req, res) => {
  const {
    params: { id },
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
    }
  } = req;
  /*if (req.location) {
    const path = await req.location;
  } else {
    const location = false;
  }*/
  //태그들 쉼표로 구분해 어레이화
  const tagsArr = tags.split(",");
  //날짜가 없으면 상시기 때문에 상시를 구분하기 위한 계산
  const startDateLength = startDate.length;
  //D-day를 위한 Date화
  const startDateFromString = new Date(startDate);
  const expiredDateFromString = new Date(expiredDate);

  if (startDateLength === 0) {
    var everyday = true;
    var startyear = 0;
    var startmonth = 0;
    var startday = 0;
  } else {
    var everyday = false;
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
  try {
    await Content.findOneAndUpdate(
      { _id: id },
      {
        name,
        url,
        tags: {
          rawTags: tags,
          tagsArr
        },
        startDate: {
          rawStartDate: startDate,
          everyday: everyday,
          startyear,
          startmonth,
          startday
        },
        expiredDate: {
          rawStartDate: expiredDate,
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
      }
    );
    res.redirect("/detail/" + id);
  } catch (error) {
    res.redirect("/");
    console.log(error);
  }
};

export const deleteContent = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Content.findByIdAndRemove({ _id: id });
  } catch (error) {
    res.redirect("/");
    console.log(error);
  }
  res.redirect("/admin");
};

export const categoryFilter = async (req, res) => {
  console.log("hello");
};
