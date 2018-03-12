const ttt = require('tictactoejs');

const game = new ttt.TicTacToe();
console.info('Le toca jugar a: ', game.turn());
console.info(game.ascii());
console.info(game.ascii2());