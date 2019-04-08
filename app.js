// include package and defined server related variable
//require package
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashwordGenerate = require('./generate_trashwords.js')
const helpers = require('handlebars-helpers')();

//define server related variable
const app = express()
const port = 3000

//set  template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//set router
//首頁
app.get('/', (req, res) => {
  res.render('index')
})
//取得post的表單資料
app.post('/', (req, res) => {
  const person = req.body.person
  const trashwords = trashwordGenerate(person)  
  res.render('index', { trashwords, person })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})

