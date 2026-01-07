const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { error: null });
});

app.post("/submit", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !email.includes("@")) {
    return res.render("index", {
      error: "Invalid email address"
    });
  }

  res.send(`
    <h2>Signup Successful</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `);
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
