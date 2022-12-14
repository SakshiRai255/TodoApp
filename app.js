require("dotenv").config();
const express = require("express");
const connToDataBase = require("./configure/todoDatabase");
const todoRoutes = require("./route/todoRoutes");
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


connToDataBase();
app.use("/",todoRoutes);

module.exports = app