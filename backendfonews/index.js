const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path"); // ✅ import path module

const app = express();
const PORT = 5000;

// ✅ Set up EJS and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // ✅ correct method to join path
app.use(express.static(path.join(__dirname, "public")));



// ✅ Route to fetch news from NewsAPI
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/api/about",(req,res)=>{
    res.render("about");
})

app.get("/api/news/list",(req,res)=>{
    res.redirect("/api/news");
})
app.get("/api/news", async (req, res) => {
  try {
    const apiKey = "e268f947d09e4a5397457e3dd8cc20f1";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data.articles); // send only articles
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.get("/api/home", (req, res) => {
  res.render("home.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
