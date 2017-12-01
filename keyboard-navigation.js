let altPressed = false;
let results = [];
let currentResult = 0;
window.addEventListener('load', initResults, false);
window.addEventListener('keydown', handleAltKey, false);
window.addEventListener('keyup', handleAltKey, false);

function initResults() {
  results = document.querySelectorAll('#lst-ib, #search :not(#extrares) h3 a, #nav a');
  currentResult = 0;
  window.addEventListener('keydown', handleNavigation, false);
  document.querySelector('#lst-ib').addEventListener('keydown', handleNavigation, false);
}

function handleAltKey(e){
  if (e.key === 'Alt') {
    altPressed = e.type === 'keydown'
  }
}

function handleNavigation(e) {
  if (altPressed) {
    e.stopPropagation();
    if (e.key === 'ArrowDown') {
      focusResult(1);
    } else  if (e.key === 'ArrowUp') {
      focusResult(-1);
    }
  }
}

function focusResult(direction) {
  const futureResult = currentResult + direction;
  if (futureResult < results.length - 1 && futureResult > 0) {
    currentResult = futureResult;
  }
  results[currentResult].focus();
}
