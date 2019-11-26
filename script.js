let turn = Math.floor(2 * Math.random());
const players = ['X', 'O'];
let names = ['Player 1', 'Player 2'];

for (let i = 0; i < 2; i++) {
  do {
    let input = prompt(`Enter name for ${names[i]}:`);
    if (input !== null) names[i] = input;
  } while (names[i].length === 0);
  do {
    let input = prompt(`Enter symbol for ${names[i]} : \n(Default: ${players[i]})`);
    if (input !== null) players[i] = input;
  } while (players[i].length !== 1);

  let info = document.createElement('p');
  info.textContent = `${players[i]}: ${names[i]}`;
  document.getElementById('playerInfo').appendChild(info);
}

const win = (grid, player) => {
  for (let i = 0; i <= 2; i += 2) { //checks both diagonals
    if (grid[0 + i].textContent == player && grid[4].textContent == player &&
      grid[8 - i].textContent == player) {
      return true;
    }
  }
  for (let count = 0; count <= 2; count++) { //checks columns
    if (grid[count].textContent == player && grid[count + 3].textContent == player &&
      grid[count + 6].textContent == player) {
      return true;
    }
  }
  for (let count = 0; count <= 6; count += 3) { //checks rows
    if (grid[count].textContent == player && grid[count + 1].textContent == player &&
      grid[count + 2].textContent == player) {
      return true;
    }
  }
  return false;
}
const tie = (grid) => {
  for (let cell of grid) {
    if (cell.textContent == '') {
      return false
    }
  }
  return true
}
const placeToken = (event) => {
  if (event.target.textContent === '') event.target.textContent = players[turn];
  if (win(document.querySelectorAll('div.cell'), players[turn])) {
    document.querySelectorAll('#gameInfo p')[1].textContent = `${names[turn]} wins!`;
    document.querySelectorAll('#gameInfo p')[1].style.display = 'block';
    let targets = document.querySelectorAll('div.cell');
    for (target of targets) target.removeEventListener('mousedown', placeToken);
  } else if (tie(document.querySelectorAll('div.cell'))) {
    document.querySelectorAll('#gameInfo p')[1].textContent = "You all lose!";
    document.querySelectorAll('#gameInfo p')[1].style.display = 'block';
  }
  turn = turn === 0 ? 1 : 0;
  document.querySelector('#gameInfo p').textContent = `${names[turn]}'s turn`;
  event.target.removeEventListener('mousedown', placeToken);
}

document.getElementById('gameInfo').appendChild(document.createElement('button'));
document.querySelector('button').textContent = 'reset';
document.querySelector('button').addEventListener('mousedown', () => {
  for (cell of document.querySelectorAll('div.cell')) {
    cell.textContent = '';
    cell.addEventListener('mousedown', placeToken);
  }
  document.querySelectorAll('#gameInfo p')[1].style.display = 'none';
  turn = Math.floor(2 * Math.random());
  document.querySelector('#gameInfo p').textContent = `${names[turn]}'s turn`;
})

document.getElementById('gameInfo').appendChild(document.createElement('p'));
document.querySelector('#gameInfo p').textContent = `${names[turn]}'s turn`;
for (let countCells = 0; countCells <= 8; countCells++) {
  let box = document.createElement('div');
  box.classList.add('cell');
  box.addEventListener('mousedown', placeToken);
  document.getElementById('gridContainer').appendChild(box);
}
document.getElementById('gameInfo').appendChild(document.createElement('p'));
