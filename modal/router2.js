const router2 = require('express').Router();
const bodyParser = require('body-parser');
router2.use(bodyParser.urlencoded({ extended: false }))
const model = require('./database.js')

router2.post('/add', (req, res) => {
    console.log(req.body.value);
    const addtodo = new model({ items: req.body.value })
    addtodo.save().then(() => {
        console.log("inserted ");
        res.redirect('/');
    }).catch(err => {
        console.log(err)
    });



})



module.exports = router2