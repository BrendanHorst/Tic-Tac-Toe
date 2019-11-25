let grid = ['', '', '', '', '', '', '', '', '']
let turn = 0;
const players = ['X', 'O'];

for (let string of grid) {
  let box = document.createElement('div');
  box.classList.add('cell');
  document.getElementById('gridContainer').appendChild(box);
}
