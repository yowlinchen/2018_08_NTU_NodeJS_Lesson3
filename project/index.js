// load express package 
let express = require("express");
// create applicatoin object
let app = express();
app.use(express.static("www"));

app.post("/calculate", function (req, res) {
    let number = req.query.number;
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