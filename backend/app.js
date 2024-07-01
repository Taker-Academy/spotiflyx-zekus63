const express = require("express");
require('dotenv').config();
const cors = require('cors');
const app = express();
// middelware require
// const middelware = require('./API/config/middleware');
// DB require
const connectDB = require("./db/connect");
const initTable = require('./db/init');

connectDB();
initTable();

app.use(cors());
app.use(express.json());
// app.use(middelware);


// auth
app.use("/auth", require("./API/routes/auth/auth"));

// start API on port
app.listen(process.env.PORT || 8080, () => {
    console.log(`server listening on port ${process.env.PORT || 8080}`);
})
