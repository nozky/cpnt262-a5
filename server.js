const express = require('express')
const path = require('path')
const cors = require('cors')

// routes
const index = require('./routes/index')
const v0 = require('./routes/api/v0')

// init
const app = express()
app.use(cors())

// setting view engine
app.set('view engine','ejs')

// setting static folder
app.use(express.static(path.join(__dirname,'/public')))

// routing to index
app.use('/',index)

// routing to api/v0
app.use('/api/v0',v0)

// file not found
app.use((req, res) => {
  res.status(404)

  const data  = {
    status: '404',
    message: 'File Not found',
  }
  res.render('pages/404', {data})
});

//Listening port  
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> { console.log(`Listening on port ${PORT}`) })