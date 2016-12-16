var express = require('express')
var exphb = require('express-handlebars')
var path = require('path')
var app = express();
var sqlite = require('sqlite3')
var db = new sqlite.Database('./smith.db')

app.engine('handlebars', exphb({defaultLayout: 'base' }))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index', {
	title: "Test Title",
	layout: 'base'
    })
})

app.listen(3000)
