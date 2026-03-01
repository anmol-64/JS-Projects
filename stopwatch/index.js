const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start the stopwatch
function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime; // continue from previous time
    timer = setInterval(update, 10); // update every 10ms
    isRunning = true;
  }
}

// Stop the stopwatch
function stop() {
  if (isRunning) {
    clearInterval(timer); // stop the interval
    isRunning = false;
  }
}

// Reset the stopwatch
function reset() {
  clearInterval(timer); // stop interval if running
  elapsedTime = 0; // reset elapsed time
  isRunning = false;
  display.textContent = "0:0:0:0"; // reset display
}

// Update the display
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  // Add leading zeros if you want nicer format
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
