// * Create a file called `warriors.js`, then, do the following. Commit and push as often as you like so that we can monitor the progress of your code in the pull request.
//   * Create a constructor function called `Warrior` that can create new warriors. This function will take parameters `name`, and `gender`. `name` can be any string, `gender` can be `M` or `F`. It should create a warrior that has these properties:
//     * `name`: the value that was passed to the constructor
//     * `gender`: the value that was passed to the constructor
//     * `level`: 1
//     * `weapon`: wooden sword
//     * `power`: a random number between 1 and 100
//   * In addition to that, every object that gets created should have the following methods:
//     * `fight`: will output to the console: "<name> rushes to the arena with <his/her> <weapon>"
//     * `faceoff`: faceoff takes one argument called `opponent`. Based on the `power` of each opponent, this method should output to the console which player won the fight based on their power. Be as creative as you like with the text of this method :)
//   * Finally, create a bunch of warriors and make them fight together.

function Warrior(name, gender) {
    this.name = name;
    if (gender === "M" || gender === "F"){
        this.gender = gender;
    }
    else {
        this.gender = "M";
    }
    this.level = 1;
    this.weapon = "Wooden Sword";
    this.power = Math.floor((Math.random() * 100) + 1);
}
Warrior.prototype = {
    fight: function() {
        return this.name + " rushes to the arena with his/her " + this.weapon;
    },
    faceoff: function(opponent) {
        if (opponent.power > this.power) {
            return "You lost! " + opponent.name + " totally anihilated you, " + this.name + "! You should work out and train if you want to make a name for yourself in the arena!";
        }
        if (opponent.power < this.power) {
            return "Congratulations " + this.name + "! You showed that noob " + opponent.name + " how real warriors fight! If you keep fighting like that you will run out of oponents in no time!";
        }
        if (opponent.power === this.power) {
            return "You clash your " + this.weapon + " against " + opponent.name + "'s " + opponent.weapon + " and they both break into a million pieces! You both start to wrestle, but it's not pretty. The crowd starts to laugh and you're both kicked out of the arena! Better luck next time!";
        }
    }
    
}

var warrior1 = new Warrior("Pau","H");
var warrior2 = new Warrior("Jane", "F");
var warrior3 = new Warrior("Conan", "M");
var warrior4 = new Warrior("Xena", "F");

// console.log(warrior1);
// console.log(warrior2);
// console.log(warrior3);
// console.log(warrior4);

// console.log(warrior1.fight(), warrior1.faceoff(warrior2));
// console.log(warrior3.fight(), warrior3.faceoff(warrior4));
// console.log(warrior2.fight(), warrior2.faceoff(warrior3));
// console.log(warrior1.fight(), warrior1.faceoff(warrior4));



