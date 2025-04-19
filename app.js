const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// JSX View Engine einrichten
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Statische Dateien
app.use(express.static(path.join(__dirname, "public")));

// Routen
app.get("/", (req, res) => {
  res.render("Home", {
    title: "CI/CD mit Docker",
    message: "Diese App wurde mit Docker gebaut und über eine CI/CD-Pipeline deployed.",
  });
});

// API-Endpunkt für Status
app.get("/api/status", (req, res) => {
  res.json({
    status: "running",
    container: "active",
    timestamp: new Date(),
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`App läuft auf http://localhost:${port}`);
  });
}

module.exports = app;
