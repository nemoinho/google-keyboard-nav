let altPressed = false;
let results = [];
let currentResult = 0;
window.addEventListener('load', initResults, false);
window.addEventListener('keydown', toggleAlt, false);
window.addEventListener('keyup', toggleAlt, false);

function initResults() {
  results = document.querySelectorAll('#lst-ib, #search :not(#extrares) h3 a, #nav a');
  currentResult = 0;
  window.addEventListener('keydown', logArrow, false);
  document.querySelector('#lst-ib').addEventListener('keydown', logArrow, false);
}

function toggleAlt(e){
  if (e.key === 'Alt') {
    altPressed = e.type === 'keydown'
  }
}

function logArrow(e) {
  if (altPressed) {
    e.stopPropagation();
    if (e.key === 'ArrowDown') {
      if (currentResult < results.length - 1) {
        currentResult++;
      }
      focusCurrentResult();
    } else  if (e.key === 'ArrowUp') {
      if (currentResult > 0) {
        currentResult--;
      }
      focusCurrentResult();
    }
  }
}

function focusCurrentResult() {
  results[currentResult].focus();
}
