const LivingCreation = require("./livingCreation")
let random = require("./random");

module.exports = class Flood extends LivingCreation {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8;
        this.directions = [];
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newFlood = new Flood(newCell[0], newCell[1], this.index);
            floodArr.push(newFlood);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}