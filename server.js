let random = require("./random");
var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("../programming3"));
app.get("/", function (req, res) {
res.redirect("index.html");
});
server.listen(3000, function () {
console.log("App is running on port 3000");
});



socket = io()
var matrix = [];
var side = 60
var n = 14;
var m = 20;

for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }

}
function characters(index,count){
    for (let a = 0; a < count; a++) {
        var v = Math.floor(random(0,n))
        var w = Math.floor(random(0,m))
        matrix[v][w] =index
}
}

var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var RainArr = [];
var UnicornArr = [];
var boomSingle;
function setup() {
    characters(1,10)
    characters(2,15)
    characters(3,20)
    characters(4,25)
    characters(5,30)
    characters(6,1)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEa = new GrassEater(x, y, 2)
                grassEaterArr.push(grEa)
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3)
                predatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                var rai = new Rain(x, y, 4)
                RainArr.push(rai)
            }
            else if (matrix[y][x] == 5) {
                var uni = new Unicorn(x, y, 5)
                UnicornArr.push(uni)
            } else if(matrix[y][x] == 6){
                boomSingle = new Boomb(x, y, 6)
            }
        }
    }
}

const myInterval =  setInterval(()=>{
    boomSingle.boooom();
    var gr = new Grass(0, 0, 1);
    grassArr.push(gr);
    clearInterval(myInterval);
},10000)

var Grass = require("./grass")
var Boomb = require("./Boomb")
var Rain = require("./rain")
var Predator = require("./Predator")
var Unicorn = require("./Unicorn")
var GrassEater= require("./GrassEater")



io.on("connection", function (socket) {
socket.emit("matrix",matrix)
});