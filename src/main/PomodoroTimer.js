class PomodoroTimer {

  //constructor
  constructor (win)
  {
    this.win =  win
    this.intervalId = null
    this.phase = "work"
    this.pomodoroCycle = 4

    //Constants
    this.shortBreakDuration = 300
    this.longBreakDuration = 3600
    this.workSessionDuration = 1200

    //Current count
    this.remaining = this.workSessionDuration

    //On restart
    this.isRunning = true
  }

  reHomePage()
  {
    this.phase = "done"
    this.remaining = 0
  }

  reInit()
  {
    console.log("Calling the reinit function...")
    this.phase = "work"
    this.pomodoroCycle = 4
    this.remaining = this.workSessionDuration
  }
  
  start()
  { 
    //onTick: what happens every second
    //if an id exists, the timer has been started already, do nothing
    if(this.isRunning)
    { 
      if(this.phase == "done")
      {
        this.reInit()
      }
      console.log("The timer is running. Let's start")
      //Init display
      this.displayTimerAndPhase(this.phase, this.remaining)

      //Call on tick every second
      this.intervalId = setInterval(() => {
        this.onTick()
      }, 1000);
      return
    }
    console.log("Timer on pause...about to be restarted...")
    this.isRunning = true
    this.start()
    
  }

  onTick() //will be executed every second
  { 
    //check the remaining amount of time
    if(this.remaining <= 0)
    {
      this.phaseEnd()
    }
    else
    {
      this.remaining --;
      this.isRunning = true
    }
    //Update the background and the display timer
    console.log("Phase: ", this.phase)
    console.log("Remaining in on tick: ", this.remaining)
    console.log("Is the timer running: ", this.isRunning)
    this.win.webContents.send("pomodoro:state", {
      phase: this.phase,
      duration: this.remaining,
      runningState: this.isRunning
    });    
  }

  phaseEnd()
  {
    console.log("This is the phase that just ended: ", this.phase)
    
    //END OF A PHASE: change it
    if(this.phase === "work" && this.pomodoroCycle == 0){ //does not go here
      this.phase = "longBreak"
      this.remaining = this.longBreakDuration
    }
    else if(this.phase === "work"){
      this.phase = "shortBreak"
      this.pomodoroCycle --
      console.log("Remaining cycles: ", this.pomodoroCycle)
      this.remaining = this.shortBreakDuration
    }
    else if(this.phase === "shortBreak"){
      this.phase = "work"
      this.remaining = this.workSessionDuration
    }
    else if(this.phase === "longBreak"){
      this.reset()
    } 
  }


  stop()
  {
    if(this.intervalId)
    {
      clearInterval(this.intervalId)
    }
    this.isRunning = false
    this.win.webContents.send("pomodoro:state", {
      phase: this.phase,
      duration: this.remaining,
      runningState: this.isRunning
    });
  }

  //reset
  reset() {
    console.log("Calling reset timer.")
    this.reHomePage();
    this.stop();
  }

  displayTimerAndPhase(phase, duration) //this is the function i will pass to the start function
  {
    console.log("Call to the function display timer and phase.")
    //Display of the correct background
    console.log("Phase: ", phase)
    console.log("Remaining: ", this.remaining)
    this.win.webContents.send("pomodoro:state", {
      phase: this.phase,
      duration: this.remaining,
      runningState: this.isRunning
    });
  }
}

module.exports = PomodoroTimer