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
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }
            else if (matrix[y][x] == 6) {
                fill("black");
            }
            rect(x * side, y * side, side, side);

        }
    }
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
}
const myInterval =  setInterval(()=>{
    boomSingle.boooom();
    var gr = new Grass(0, 0, 1);
    grassArr.push(gr);
    clearInterval(myInterval);
},10000)