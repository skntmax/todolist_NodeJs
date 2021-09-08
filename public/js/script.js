// const express = require('express').Router();
const todo = require('./../../modal/database.js');

async function dlt(id) {

    await todo.deleteOne({ id }).then(() => {
        console.log(id + " deleted ")
        res.redirect('/');
    }).catch(err => {
        console.log(err)
    });
}