import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

export const contents = [
  {
    id: 1,
    name: "abc",
    url: "http://abc.com",
    tags: [],
    callNumber: "02-123-1234",
    startDate: { year: 2020, month: 1, day: 1 },
    expiredDate: { year: 2020, month: 1, day: 19 },
    minage: 20,
    maxage: 24,
    category: "education",
    range: "student",
    where: ["seoul", "gyounggi"],
    orga: ["gov", "private"],
    rating: 3
  }
];
