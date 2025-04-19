const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Statische Dateien
app.use(express.static(path.join(__dirname, "public")));

// Set regular HTML views
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

// Create views directory if it doesn't exist
const fs = require("fs");
const viewsDir = path.join(__dirname, "views");
if (!fs.existsSync(viewsDir)) {
  fs.mkdirSync(viewsDir, { recursive: true });
}

// Create a simple HTML template file
const indexHtml = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CI/CD mit Docker</title>
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body class="bg-gray-200 flex flex-col h-screen m-0 overflow-hidden">
  <header class="bg-slate-800 text-white py-2">
    <div class="container mx-auto px-4">
      <h1 class="text-xl font-bold">CI/CD mit Docker</h1>
    </div>
  </header>
  <main class="container mx-auto px-4 py-2 flex-grow overflow-auto flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-slate-700 mb-4">Willkommen zur Demo-App</h2>
      <p class="mb-4">Diese App wurde mit Docker gebaut und über eine CI/CD-Pipeline deployed.</p>

      
    </div>
  </main>
  <footer class="bg-slate-800 text-white py-2">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; ${new Date().getFullYear()} Docker CI/CD Tutorial</p>
    </div>
  </footer>
  <script src="/js/script.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(viewsDir, "index.html"), indexHtml);

// Routen
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// API-Endpunkt für Status
app.get("/api/status", (req, res) => {
  res.json({
    status: "running",
    container: "active",
    timestamp: new Date(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, "0.0.0.0", () => {
    console.log(`App läuft auf http://127.0.0.1:${port}`);
  });
}

module.exports = app;
