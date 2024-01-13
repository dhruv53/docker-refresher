const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    { id: "1", title: "Sorcerer's Stone" },
    { id: "2", title: "Chamber of Secrets" },
    { id: "3", title: "Prisoner of Azkaban" },
    { id: "4", title: "Goblet of Fire" },
  ]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
