const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const router2 = require('./modal/router2.js');
const todo = require('./modal/database.js');
const hbs = require('hbs');
app.use(router2); // middle ware 

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'hbs');
app.set('views', __dirname + "/templates/views");
hbs.registerPartials(__dirname + "/templates/partials");
app.use(express.static(__dirname + "/public/css/"))
app.use(express.static(__dirname + "/public/js/"))

app.get('/', async(req, res) => {

    const alldata = await todo.find();
    res.render('index', { alldata });

})

app.get('/delete/:_id', async(req, res) => {
    let id = req.params._id;
    await todo.deleteOne({ id }).then(() => {
        console.log(id + " deleted ")
        res.redirect('/');
    }).catch(err => {
        console.log(err)
    });
})


app.listen(4000, () => {
    console.log("server running at ", 4000);
})