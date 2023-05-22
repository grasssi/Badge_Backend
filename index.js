const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const flash = require('connect-flash');//?
const session = require('express-session');//?

//Require to use .env
require('dotenv').config()

const app = express()
const port = 3000

app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));



//Morgan Config
app.use(morgan('dev'))

// database connection 
require('./database/connect')

//BearerStrategy with passport
//require('./passport/bearerStrategy')

// config body parser
app.use(express.json())

// cors
app.use(cors()) 

app.get('/', (req, res) => {
  res.send({mesage : 'Hello World!'})
})
//flash
app.use(flash());


// require routes 
const badgeApi = require('./routes/badgeAPI');
const efccmApi = require('./routes/efccmAPI');

app.use('/api/v1', badgeApi);
app.use('/api/v1', efccmApi);



app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})
