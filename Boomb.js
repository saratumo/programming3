class Boomb {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
    boooom() {
        
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0;
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in predatorArr) {
                    if (x == predatorArr[i].x && y == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in UnicornArr) {
                    if (x == UnicornArr[i].x && y == UnicornArr[i].y) {
                        UnicornArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
  
    }
}