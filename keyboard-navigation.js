let altPressed = false;
window.addEventListener('keydown', toggleAlt, false);
window.addEventListener('keyup', toggleAlt, false);
window.addEventListener('keydown', logArrow, false);

function toggleAlt(e){
  if (e.key === 'Alt') {
    altPressed = e.type === 'keydown'
  }
}

function logArrow(e) {
  if (altPressed) {
    if (e.key === 'ArrowDown') {
      console.log('Next');
    } else  if (e.key === 'ArrowUp') {
      console.log('Previous');
    }
  }
}
