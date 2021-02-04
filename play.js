function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
var door = [
  {type : "monster",level: 1, damage:1},
  {type : "monster",level: 2, damage:1},
  {type : "monster",level: 4, damage:1},
  {type : "monster",level: 3, damage:1},
  {type : "curse",level: null, damage:1},
  {type : "curse",level: null, damage:1},
  {type : "curse",level: null, damage:1},
];
players = [];
shuffle(door);
module.exports = {
    printDoor: function () {
      console.log(door);
    },
    pushNick: function (nick) {
      players.push(nick);
    },
    printPlayer: function () {
      players.forEach((item, i) => {
        console.log(item);
      });

    }

  }
