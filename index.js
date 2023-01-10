const express = require('express')

// Create express instance
const app = express()

const timeout = require('connect-timeout')

const bodyParser = require("body-parser");//body参数解析
app.use(bodyParser.urlencoded({ extended: false })); //parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse application/json

app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next){
   if (req.timedout) {
    console.log('404');
   } ;
   next()
}

// Require API routes
const upload = require('./routes/upload')
const xlsx = require('./routes/xlsx')
const request = require('./routes/request')
const video = require('./routes/video')
const map = require('./routes/map')

// Import API Routes
app.use(upload)
app.use(xlsx)
app.use(request)
app.use(video)
app.use(map)
app.use('/upload', express.static(__dirname + 'upload'));

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 818
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`127.0.0.1:${port}`)
  })
}
