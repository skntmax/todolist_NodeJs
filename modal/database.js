const router = require('express').Router();
const mongoose = require('mongoose');
const val = require('./../public/js/script.js');


mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

const schema = new mongoose.Schema({
    items: {
        type: String,
        required: true
    }
})

const todomodel = new mongoose.model("todolist", schema);
if (todomodel) {
    console.log("model created");
} else
    console.log("There is something error  ");


module.exports = todomodel;