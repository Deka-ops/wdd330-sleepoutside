// References to DOM elements
if (intervalId) clearInterval(intervalId);


// Start ticking every second
intervalId = setInterval(() => {
if (!isPaused){
remainingSeconds -= 1;
if (remainingSeconds <= 0){
remainingSeconds = 0;
updateDisplay();
clearInterval(intervalId);
intervalId = null;
onComplete();
return;
}
updateDisplay();
}
}, 1000);
}


function onComplete(){
setStatus("Time's up!");
countdownEl.textContent = "Time's up!";
startBtn.disabled = false;
pauseBtn.disabled = true;
resetBtn.disabled = false;
}


function togglePause(){
if (!intervalId) return;
isPaused = !isPaused;
pauseBtn.textContent = isPaused ? 'Resume' : 'Pause';
setStatus(isPaused ? 'Paused' : 'Running');
}


function resetCountdown(){
if (intervalId) clearInterval(intervalId);
intervalId = null;
isPaused = false;
startingSeconds = parseInt(timeInput.value, 10) || 10;
remainingSeconds = startingSeconds;
updateDisplay();
setStatus('Idle');
startBtn.disabled = false;
pauseBtn.disabled = true;
pauseBtn.textContent = 'Pause';
resetBtn.disabled = true;
}


// Attach event listeners
startBtn.addEventListener('click', startCountdown);
pauseBtn.addEventListener('click', togglePause);
resetBtn.addEventListener('click', resetCountdown);


// Initialize display
remainingSeconds = parseInt(timeInput.value, 10) || 10;
updateDisplay();
setStatus('Idle');


// Accessibility nicety: allow Enter on the input to start
timeInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') startBtn.click();
});