var express = require('express')
var exphb = require('express-handlebars')

var app = express();

app.engine('handlebars', exphb({defaultLayout: 'base' }))
app.set('view engine', 'handlebars')

app.get('/', function(req, res){
    res.render('index', {
	title: "Test Title",
	layout: 'base'
    })
})

app.listen(3000)
