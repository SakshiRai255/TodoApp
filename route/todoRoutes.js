// URL PATH

const express = require("express");
const {home,createTodo,getTodo,editTodo,deleteTodo} = require("../controllers/todocontrollers");
const router = express.Router();

router.get("/",home);
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.put("/editTodo/:id",editTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router