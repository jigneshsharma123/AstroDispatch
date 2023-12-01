const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIo = require('socket.io');
const io  = socketIo(server);
require('dotenv').config();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('assets'));
app.use('/user', require('./routers/user'));

app.get('/',(req,res)=> {
    res.status(200).render('index',{title: "Welcome"});
});
server.listen(port,(err)=> {
    if(err) {
        console.error("Problem in running the server");
    }
    console.log(`server is running on port:${port}`);
});