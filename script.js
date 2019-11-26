let grid = []
let turn = 0;
const players = ['X', 'O'];

function win() {
  if (grid[0].textContent == players[turn] && grid[4].textContent == players[turn] &&
    grid[8].textContent == players[turn]) {
    console.log("you win");
  }
  if (grid[2].textContent == players[turn] && grid[4].textContent == players[turn] &&
    grid[6].textContent == players[turn]) {
    console.log("you win");
  }
  for (let count = 0; count <= 2; count++) {
    if (grid[count].textContent == players[turn] && grid[count + 3].textContent == players[turn] &&
      grid[count + 6].textContent == players[turn]) {
      console.log("you win");
    }
  }
  for (let count = 0; count <= 6; count += 3) {
    if (grid[count].textContent == players[turn] && grid[count + 1].textContent == players[turn] &&
      grid[count + 2].textContent == players[turn]) {
      console.log("you win");
    }
  }
}
for (let countCells = 0; countCells <= 8; countCells++) {
  let box = document.createElement('div');
  grid.push(box);
  box.classList.add('cell');
  box.addEventListener('mousedown', event => {
    if (event.target.textContent === '') event.target.textContent = players[turn];
    win();
    if (turn == 0) {
      turn = 1;
    } else {
      turn = 0;
    }
  });
  document.getElementById('gridContainer').appendChild(box);
}
