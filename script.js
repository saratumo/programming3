socket = io()
const weatherBtn = document.getElementById("weather")
weatherBtn.addEventListener("click", function () {
  if (weather === "summer") {
    weather = "winter"
  } else {
    weather = "summer"
  }
})

var side = 20
var n = 30;
var m = 30;
var weather = "summer"

function setup() {
  frameRate(5);
  createCanvas(m * side, n * side);
  background('#acacac');
}

function drawful(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 1) {
        if (weather === "summer") {
          fill("green");
        } else if (weather === "winter") {
          fill("white")
        }
      } else if (matrix[y][x] === 0) {
        fill("#acacac");

      } else if (matrix[y][x] === 2) {
        if (weather === "summer") {
          fill("yellow");
        } else if (weather === "winter") {
          fill("#FAFAD2")
        }
      } else if (matrix[y][x] === 3) {
        if (weather === "summer") {
          fill("red");
        } else if (weather === "winter") {
          fill("#f28972")
        }

      } else if (matrix[y][x] === 4) {
        fill("brown");

      } else if (matrix[y][x] === 5) {
        fill("purple");

      } else if (matrix[y][x] === 6) {
        fill("black");

      } else if (matrix[y][x] === 7) {
        if (weather === "summer") {
          fill("blue");
        } else if (weather === "winter") {
          fill("#a2d2eb")
        }
      }

      rect(x * side, y * side, side, side);

    }
  }
}

socket.on("matrix", drawful)
var grasses = document.getElementById("grassNum")
var Unicorns = document.getElementById("UnicornNum")
var grassEaters = document.getElementById("grassEaterNum")
socket.on("grassCount",(grassNum) => {
  grasses.innerText = grassNum
})
socket.on("UnicornCount",(UnicornNum) => {
  Unicorns.innerText = UnicornNum
})
socket.on("grassEaterCount",(grassEaterNum) => {
  grassEaters.innerText = grassEaterNum
})
