const express = require('express');
const dotenv = require('dotenv').config
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
app.listen(PORT, (err) => {
  console.log(`Server is running on port ${PORT}`);
});