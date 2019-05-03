const express = require('express'),
bp = require('body-parser'),
cors = require('cors'),
path = require('path'),
DB_NAME = "activities",
port = 8000,
app = express(); //this does all the things


app.use(bp.json());
app.use(cors());   //these are all the things that we will be using
app.use(express.static(path.join(__dirname, './client/build')))// tells where our static folder is make sure to 
// npm run build after putting this in

require('./server/utils/mongoose')(DB_NAME); //telling where mongoose is
//and what DB_NAME is but this still needs to be defined.
require('./server/utils/routes')(app);                                                      //these routes would get ran first.

//TODO: app.all

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/build/index.html'));  //instead of an error message it would get this.
});


app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});