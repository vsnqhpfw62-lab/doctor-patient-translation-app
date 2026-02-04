const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Doctor–Patient Translation Backend Prototype");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
