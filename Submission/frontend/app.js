const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { error: null });
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/submit", req.body);
    res.send(response.data);
  } catch (error) {
    res.render("index", { error: "Error connecting to backend" });
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
