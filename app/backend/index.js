const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/tasks", (req, res) => {
  res.json({
    tasks: ["Learn DevOps", "Build CI/CD pipeline", "Deploy to Kubernetes"]
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

