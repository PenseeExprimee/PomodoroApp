const btnStartTimer = document.getElementById('startTimer')
const btnStopTimer = document.getElementById('stopTimer')
const btnResetTimer = document.getElementById('resetTimer')
const displayTimer = document.getElementById('displayTimer')


btnStartTimer.addEventListener('click', () => {
  try {
    console.log("The start button has been pressed (UI side).")
    //showInfoMessage('GO: Start button pressed!')
    window.pomodoroTimer.startTimer()

  } catch (e) {
    //Message for the user
    if(e.code == 'TIMER_TIMEOUT'){
      showInfoMessage('Le serveur met trop de temps à répondre.')
    }
    else {
      showErrorMessage(e)
    }
  }
})

btnStopTimer.addEventListener('click', () => {
  try {
    console.log("The stop timer button has been pressed (UI side).")
    //showInfoMessage('Test error message, the stop button has been pressed.')
    window.pomodoroTimer.stopTimer()
    //showInfoMessage('STOP: Stop button pressed!')

  } catch (e) {
    //Message for the user
      showErrorMessage('Erreur au stop timer.') 
  }
})

btnResetTimer.addEventListener('click', () => {
  try {
    console.log("The reset timer has been pressed (UI side).")
    //showInfoMessage('Test error message, the reset button has been pressed.')
    window.pomodoroTimer.resetTimer()
    //showInfoMessage('RESET: Reset button pressed!')

  } catch (e) {
    //Message for the user
    showErrorMessage('reset button pressed.')
    
  }
  
})

//Retrieve info given by the main
window.pomodoroTimer.onStateChange(({phase, duration, runningState}) => {
  //Display the timer
  console.log("phase:", phase, "duration:", duration, "isRunning:", runningState)

  if (typeof duration !== "number" || isNaN(duration)) {
    displayTimer.textContent = "00:00"
    return
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2,"0")}:${String(remainingSeconds).padStart(2,"0")}`;
  };
  
  displayTimer.textContent = formatTime(duration)

  //Change the background
  document.body.classList.remove("work", "shortBreak", "longBreak", "done")
  document.body.classList.add(phase)

  let displayDiv = document.getElementById("displayTimer")
  if(!runningState && phase === "done")
  { //after a long break
    displayDiv.classList.remove("displayTimerStop")
    displayDiv.classList.add("displayTimer")

    //Buttons appearance
    btnStopTimer.disabled = true
    btnResetTimer.disabled = true
    btnStartTimer.disabled = false
  }
  else if(runningState)
  {
    console.log('The timer is running')
    displayDiv.classList.remove("displayTimerStop")
    displayDiv.classList.add("displayTimer")

    //Buttons appearance
    btnStopTimer.disabled = false
    btnResetTimer.disabled = true
    btnStartTimer.disabled = true
  }
  else
  {
    console.log("The timer is not running...")
    displayDiv.classList.remove("displayTimer")
    displayDiv.classList.add("displayTimerStop")

    //Buttons appearance
    btnStopTimer.disabled = true
    btnResetTimer.disabled = false
    btnStartTimer.disabled = false
  }
})


