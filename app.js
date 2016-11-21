var express = require('express')
var exphb = require('express-handlebars')

var app = express();

app.engine('handlebars', exphb({defaultLayout: 'base' }))
app.set('view engine', 'handlebars')


app.listen(3000)
