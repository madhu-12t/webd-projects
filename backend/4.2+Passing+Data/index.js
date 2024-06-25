import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var initialMsg="Enter Your Name Below: ";

app.get("/", (req, res) => {
  res.render("index.ejs",{data:initialMsg});
});

app.post("/submit", (req, res) => {
  var len=req.body.fName.length+req.body.lName.length;
  res.render("index.ejs",{data:`There are ${len} letters in your name`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
