const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Salem louled 2");
});

module.exports = app.listen(process.env.PORT || 5000, () =>
  console.log(`Running on http://localhost:5000`)
);
