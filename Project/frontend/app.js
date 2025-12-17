const express = require("express");
const app = express();

app.set("view engine", "ejs");

const API_URL = process.env.BACKEND_URL || "http://localhost:8080/api";

app.get("/", async (req, res) => {
    try {
        const response = await fetch(API_URL); // native fetch

        if (!response.ok) {
            throw new Error("API error");
        }

        const data = await response.json();

        res.render("index", { names: data.data });

    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("Express running on port 3000");
});
