const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const connectDB = () => {
  try {
    mongoose.connect(DB);
    console.log("mongodb Connnected....");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

const Port = process.env.PORT || 5000;

app.listen(Port, (req, res) => console.log(`app is runnng at ${Port}`));
