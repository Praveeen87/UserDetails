const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Userdetails = require("./models/userdetailsmodels");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

dotenv.config();
const PORT = process.env.PORT || 8080;

// app.get("/", (req, res) => {
//   return res.send("create user");
// });

app.get("/fetchuser", async (req, res) => {
  try {
    const userdetails = await Userdetails.find({}).sort({ createdAt: -1 });
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
  //return res.send(req.body);
});

app.post("/createuser", async (req, res) => {
  try {
    const userdetails = await Userdetails.create(req.body);
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
  //return res.send(req.body);
});

mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then((data) => {
    app.listen(PORT, () =>
      console.log(`server is running on http://localhost:${PORT}`)
    );

    console.log("database connected");
  })
  .catch((error) => {
    console.log("connection error");
  });
