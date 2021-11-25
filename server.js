import express from "express";
import * as SimpleBookController from "./controllers/simpleBookController.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test");

const app = express();
const port = 3030;

app.use(express.json());

// simple users: READ
app.get("/simpleBook", async (req, res) => {
  res.json({
    simpleBook: await SimpleBookController.getAllBooks(),
  });
});

app.post("createSimpleBook", async (req, res) => {
  const simpleBookObj = req.body;
  const result = await SimpleBookController.createSimpleBook(simpleBookObj);
  res.json({
    result,
  });
});

app.listen(port, () => {
  console.log(`API is now listening on port ${port}`);
});
