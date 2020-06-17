import User from "../models/User";
import passport from "passport";

export const getJoin = async (req, res) => {
  try {
    const user = await User.create({
      name,
      email
    });
    await User.register(user, password);
  } catch (error) {
    console.log(error);
  }
};
