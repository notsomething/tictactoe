var currentPlayer = 'x'
var secondTurn = 'o'
var turns = 0
var endGame = 'false'
var isWinner;
let tile1 = ''
let tile2 = ''
let tile3 = ''
let tile4 = ''
let tile5 = ''
let tile6 = ''
let tile7 = ''
let tile8 = ''
let tile9 = ''
git 
function getWinner() {
if (tile1===tile2 && tile2===tile3) {
  $('#result').html(tile1 + "wins") 
  isWinner = true
} else if (tile4===tile5 && tile5===tile6) {
  $('#result').html(tile4 + "wins")  
} else if (tile7===tile8 && tile8===tile9) {
  $('#result').html(tile4 + "wins")  
}
}