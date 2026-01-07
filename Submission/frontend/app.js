const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", async (req, res) => {
    const { name, email } = req.body;

    res.send(`
        <h2>Submitted Data</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `);
});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});
