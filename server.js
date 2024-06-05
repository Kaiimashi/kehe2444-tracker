const express = require('express');

const app = express();

//serve static files out of the 'public' folder
app.use(express.static('public'));

//serves 'index.html' when users access the root directory using 'res.sendFile()'
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

//starts server, listenings for incoming traffic + logs message to console
let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
});

//view server in web browser using 'http://localhost:8888'
//To stop server: 'control + c'