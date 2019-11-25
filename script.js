let grid = ['', '', '', '', '', '', '', '', '']
let turn = 0;
const players = ['X', 'O'];

for (let string of grid) {
  let box = document.createElement('div');
  box.classList.add('cell');
  box.addEventListener('mousedown', event => {
    if(event.target.textContent === '') event.target.textContent = players[turn];
    if (turn == 0){
      turn = 1;
    }
    else{
      turn = 0;
    }

  });
  document.getElementById('gridContainer').appendChild(box);
}
