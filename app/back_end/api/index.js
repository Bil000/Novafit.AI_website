const express = require("express");
const path = require("path");
const next = require("next");
const PORT = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: path.join(__dirname, "..", "..", "front_end") }); // Set Next.js app to front_end directory
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
  // API route example
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the backend!" });
  });
  // Serve Next.js frontend for all other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, () => {
    console.log(`Novafit.AI server started successfully on http://localhost:${PORT}`);
  });
});
