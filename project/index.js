// load express package 
let express = require("express");
let parser = require("body-parser");
// create applicatoin object
let app = express();
// create static website
app.use(express.static("www"));

// establish 接受 post
app.use(parser.urlencoded({
    extended: true
}));

app.post("/calculate", function (req, res) {
    let number = req.body.number;
    let result = number * number;
    res.send("Answer: " + result);
});

// app.get("/calculate", function (req, res) {
//     let number = req.query.number;
//     let result = number * number;
//     res.send("Answer: " + result);
// });
app.listen(3000, function () {
    console.log("Server Started");
});