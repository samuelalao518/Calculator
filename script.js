// -------------------
// Calculator Logic
// -------------------
const display = document.getElementById('display');
const calcButtons = document.querySelectorAll('.button-container button');

calcButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('c')) {
      display.value = ''; // Clear display
    } else if (button.classList.contains('erase')) {
      display.value = display.value.slice(0, -1); // Backspace
    } else if (button.classList.contains('equals')) {
      try {
        // Replace × and ÷ with * and /
        const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expression); // Evaluate expression
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});

// -------------------
// Theme Switching
// -------------------
function setTheme(theme) {
  const body = document.body;
  const bg = document.getElementById('glass-bg');

  // Reset
  body.classList.remove('dark-theme');
  bg.className = ''; // remove any gradient class

  if (theme === 'dark') {
    body.classList.add('dark-theme'); // Dark theme uses body class
  } else {
    bg.classList.add(theme); // neon, ocean, sunset, night, pastel
  }
}
