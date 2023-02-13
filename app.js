const express = require('express');

const app = express();

const fs = require("fs");

var cors = require('cors')
 
app.use(cors({ origin: "*" }));
app.use(express.json());



app.use(express.static('./frontend/build'))

require("./routes")(app);

app.get('*', function(req, res) {
    res.redirect('/');
});


const server = app.listen(3005,'localhost', () => {
    console.log(`HTTP RUNNING ON 80`)
})
module.exports = server;
  