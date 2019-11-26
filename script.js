let grid = []
let turn = 0;
const players = ['X', 'O'];

function win() {
  if (grid[0].textContent == players[turn] && grid[4].textContent == players[turn] &&
    grid[8].textContent == players[turn]) {
    return true;
  }
  if (grid[2].textContent == players[turn] && grid[4].textContent == players[turn] &&
    grid[6].textContent == players[turn]) {
    return true;
  }
  for (let count = 0; count <= 2; count++) {
    if (grid[count].textContent == players[turn] && grid[count + 3].textContent == players[turn] &&
      grid[count + 6].textContent == players[turn]) {
      return true;
    }
  }
  for (let count = 0; count <= 6; count += 3) {
    if (grid[count].textContent == players[turn] && grid[count + 1].textContent == players[turn] &&
      grid[count + 2].textContent == players[turn]) {
      return true;
    }
  }
  return false;
}
const placeToken = (event) => {
  if (event.target.textContent === '') event.target.textContent = players[turn];
  if (win()) {
    let winner = document.createElement('p');
    document.body.appendChild(winner);
    winner.textContent = `${players[turn]} wins!`;
    let targets = document.querySelectorAll('div.cell');
    for (target of targets) target.removeEventListener('mousedown', placeToken);
  }
  if (turn == 0) {
    turn = 1;
  } else {
    turn = 0;
  }
}
for (let countCells = 0; countCells <= 8; countCells++) {
  let box = document.createElement('div');
  grid.push(box);
  box.classList.add('cell');
  box.addEventListener('mousedown', placeToken);
  document.getElementById('gridContainer').appendChild(box);
}
