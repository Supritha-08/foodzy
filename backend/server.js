const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000
connectDB()
app.use(express.json());
app.use(cors());
app.use(express.static("public"))
app.use("/",require("./route/user"))
app.use("/receipe",require("./route/receipe"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


