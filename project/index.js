// load express package 
let express = require("express");
// create applicatoin object
let app = express();

// 建立靜態的網站空間
// 將專案資料夾中的 www 子資料夾 直接對應到網址上
/*
    example:
        專案資料夾 /www/test.html
        http://localhost:3000/test.html


        專案資料夾 /www/imgs/landscape.jpg
        http://localhost:3000/imgs/landscape.jgp

*/
app.use(express.static("www"));
// Express 中介函式
app.use(function (req, res, next) {
    console.log("Middleware 1");
    next(); // go to next function
});
app.get("/", function (req, res) {
    res.send("Hello Middleware");
});




// start the server at http://localhost:3000/
app.listen(3000, function () {
    console.log("Server Started");
});
// Take care /image request
/*
    use path to get the flexibility
    http://localhost:3000/image/landscape.jpg
    http://localhost:3000/image/package.jpg
 */
// app.get("/image/:name", function (req, res) {
//     // let path = req.path;
//     // let name = path.replace("/image/", "");
//     // res.send(path);

//     // use req.params.參數名稱 取得路徑參數
//     let name = req.params.name;
//     res.download("./" + name);
// });

// Take care of / request
// app.get("/", function (req, res) {
//     // get connection method
//     console.log(req.method);
//     console.log(req.ip);
//     console.log(req.hostname);
//     // get request header
//     let lang = req.get("Accept-Language");
//     console.log(lang);
//     res.send("<h3>My Image</h3><img src='/image/landscape.jpg' />");
//     // set rsponse header
//     // res.set("test", "my header");
//     // let obj = {
//     //     x: 3,
//     //     y: 4
//     // };
//     // // res.send(obj);
//     // res.send(obj);
// });