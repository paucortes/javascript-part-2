/* Create a file called `terrain.js`, then, do the following. Commit and push as often as you like so that we can monitor the progress of your code in the pull request.
  * Create a constructor function called `Tile` that can create new tiles. This function will take parameters `x` and `y` and create an object that has these properties:
    * `x`: the value that was passed to the constructor
    * `y`: the value that was passed to the constructor
    * `height`: a random number between 1 and 3
    * `type`: a random word between `grass`, `rocks` or `water`
    * `condition`: a random word between `burning`, `normal` or `frozen`
  * In addition to that, every object that gets created should have the following methods:
    * `freeze`: if the object is burning, then its condition should change to `normal`. if the object is normal then its condition should change to `frozen` and if it is `frozen`, its `height` should increment by 1
    * `burn`: if the object is frozen, then it will become normal. if the object is normal, then it should change to `burning`. if it is already burning, then its height should decrement by 1 until it gets to 0.
  * Write a piece of code that will use the `Tile` constructor to create a 20x20 map of `Tile`s. The map will be a 2D array (array inside array).
  * Output the map to the console in the following way:
    * For each tile, output the height of the tile as an "icon" for that tile
  * Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again*/
  

function Tile(x,y) {
    var tileTypes = ["grass", "rocks", "water"];
    var conditionTypes = ["burning", "normal", "frozen"];
    this.x = x;
    this.y = y;
    this.height = Math.floor(Math.random() * 3 + 1);
    this.type = tileTypes[Math.floor(Math.random() * 3)];
    this.condition = conditionTypes[Math.floor(Math.random() * 3)];
}

Tile.prototype = {
    freeze: function(){
        if (this.condition === "burning") {
            this.condition = "normal";
        }
        if (this.condition === "normal") {
            this.condition = "frozen";
        }
        if (this.condition === "frozen") {
            this.height = this.height+1;
        }
    },
    burn: function() {
        if (this.condition === "frozen") {
            this.condition = "normal";
        }
        if (this.condition === "normal") {
            this.condition = "burning";
        }
        if (this.condition === "burning") {
            this.height = this.height-1;
    }
    }
};

// This is the map with all the tiles and all the properties
var worldMap = [];
for (var i = 0; i < 21; i++) {
    var rows = [];
    for (var j=0; j<21; j++) {
        rows.push(new Tile(i,j));
    }
    worldMap.push(rows);
}
// console.log(worldMap[0]);

// This is the map only with the height of each tile
var finalWorldMap = [];
for (var i = 0; i < worldMap.length; i++) {
    var rows2 = [];
    for (var j=0; j<worldMap[i].length; j++) {
        rows2.push(worldMap[i][j].height);
    }
    finalWorldMap.push(rows2);
}
// console.log(finalWorldMap);

var randomConditionWorldMap = [];
for (var i = 0; i < worldMap.length; i++) {
    var rows3 = [];
    for (var j=0; j<worldMap[i].length; j++) {
        var randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1) {
            worldMap[i][j].freeze();
            rows3.push(worldMap[i][j]);
        }
        if (randomNumber === 2) {
            worldMap[i][j].burn();
            rows3.push(worldMap[i][j]);
        }
        if (randomNumber === 3) {
            rows3.push(worldMap[i][j]);        }
    }
    randomConditionWorldMap.push(rows3);
}
// console.log(randomConditionWorldMap[0]);
