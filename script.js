let grid = []
let turn = Math.floor(2 * Math.random());
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
    document.querySelectorAll('p')[1].textContent = `${players[turn]} wins!`;
    document.querySelectorAll('p')[1].style.display = 'block';
    let targets = document.querySelectorAll('div.cell');
    for (target of targets) target.removeEventListener('mousedown', placeToken);
  }
  turn = turn === 0 ? 1 : 0;
  document.querySelector('p').textContent = `${players[turn]}'s turn`;
  event.target.removeEventListener('mousedown', placeToken);
}

document.body.appendChild(document.createElement('button'));
document.querySelector('button').textContent = 'reset';
document.querySelector('button').addEventListener('mousedown', () => {
  for (cell of grid) {
    cell.textContent = '';
    cell.addEventListener('mousedown', placeToken);
  }
  document.querySelectorAll('p')[1].style.display = 'none';
  turn = Math.floor(2 * Math.random());
  document.querySelector('p').textContent = `${players[turn]}'s turn`;
})

document.body.appendChild(document.createElement('p'));
document.querySelector('p').textContent = `${players[turn]}'s turn`;
for (let countCells = 0; countCells <= 8; countCells++) {
  let box = document.createElement('div');
  grid.push(box);
  box.classList.add('cell');
  box.addEventListener('mousedown', placeToken);
  document.getElementById('gridContainer').appendChild(box);
}
document.body.appendChild(document.createElement('p'));
