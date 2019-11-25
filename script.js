let grid = []
let turn = 0;
const players = ['X', 'O'];

function win() {
  for (let count = 0; count <= 2; count++) {
    if (grid[count].textContent == 'X' && grid[count + 3].textContent == 'X' &&
    grid[count + 6].textContent == 'X') {
      console.log("you win");
    }
  }
  for (let count2 = 0; count <= 6; count += 3) {
    if (grid[count].textContent == 'X' && grid[count + 1].textContent == 'X' &&
    grid[count + 2].textContent == 'X') {
      console.log("you win");
    }
  }
  for (let count2 = 0; count2 <= 8; count2++) {
    let box = document.createElement('div');
    grid.push(box);
    box.classList.add('cell');
    box.addEventListener('mousedown', event => {
      if (event.target.textContent === '') event.target.textContent = players[turn];
      if (turn == 0) {
        turn = 1;
      } else {
        turn = 0;
      }
      win();
    });
    document.getElementById('gridContainer').appendChild(box);
  }
