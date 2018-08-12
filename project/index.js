// load express package 
let express = require("express");
let parser = require("body-parser");
// create applicatoin object
let app = express();
// create static website
app.use(express.static("www"));

// establish 接受 post 方法參數的能力
app.use(parser.urlencoded({
    extended: true
}));

app.listen(3000, function () {
    console.log("Server Started");
});