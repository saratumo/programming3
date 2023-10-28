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

let random = require("./random");
let Grass = require('./Grass')
let GrassEater = require('./grassEater')
let Predator = require('./Predator')
let Rain = require('./rain')
let Unicorn = require('./Unicorn')
let Boomb = require('./Boomb')
let Flood = require("./Flood")

matrix = [];
grassArr = [];
grassEaterArr = [];
predatorArr = [];
RainArr = [];
UnicornArr = [];
floodArr = []
boomSingle = null;
var n = 30;
var m = 30;

for (let i = 0; i < n; i++) {
  matrix.push([])
  for (let j = 0; j < m; j++) {
    matrix[i].push(0)
  }
}

function createGame() {
  function characters(index, count) {
    for (let a = 0; a < count; a++) {
      var v = Math.floor(random(n))
      var w = Math.floor(random(m))
      matrix[v][w] = index
    }
  }

  characters(1, 10)
  characters(2, 15)
  characters(3, 20)
  characters(4, 25)
  characters(5, 30)
  characters(6, 1)
  characters(7,10)

  for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y, 1);
        grassArr.push(gr);
      } else if (matrix[y][x] == 2) {
        var grEa = new GrassEater(x, y, 2)
        grassEaterArr.push(grEa)
      } else if (matrix[y][x] == 3) {
        var pre = new Predator(x, y, 3)
        predatorArr.push(pre)
      } else if (matrix[y][x] == 4) {
        var rain = new Rain(x, y, 4)
        RainArr.push(rain)
      } else if (matrix[y][x] == 5) {
        var unicorn = new Unicorn(x, y, 5)
        UnicornArr.push(unicorn)
      } else if (matrix[y][x] == 6) {
        boomSingle = new Boomb(x, y, 6)
      }else if (matrix[y][x] == 7)
        var flood = new Flood(x, y, 6)
        floodArr.push(flood)
    }
  }
}

function drawGame() {
  for (var i in grassArr) {
    grassArr[i].mul();
  }
  for (var i in grassEaterArr) {
    grassEaterArr[i].eat();
  }
  for (var i in predatorArr) {
    predatorArr[i].eat();
  }
  for (var i in RainArr) {
    RainArr[i].eat();
  }
  for (var i in UnicornArr) {
    UnicornArr[i].eat();
  }
  for (var i in grassArr,predatorArr,RainArr,UnicornArr){
    grassArr,predatorArr,RainArr,UnicornArr[i].eat()
  }
  io.emit("grassCount", grassArr.length)
  io.emit("UnicornCount",UnicornArr.length)
   io.emit("grassEaterCount",grassEaterArr.length)

  io.emit("matrix", matrix)
}

createGame()

let intervalID;

function startGame() {
  clearInterval(intervalID)
  createGame()
  intervalID = setInterval(() => {
    drawGame()
  }, 200)

}

io.on("connection", (socket) => {
  socket.emit("matrix", matrix)
  startGame()
})
