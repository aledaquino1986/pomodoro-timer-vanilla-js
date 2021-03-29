const appVariables = {
  title: document.querySelector(".pomodoro-title h2"),
  minutesTimer: document.querySelector(".pomodoro-timer__minutes"),
  secondsTimer: document.querySelector(".pomodoro-timer__seconds"),

  startButton: document.querySelector(".start"),
  stopButton: document.querySelector(".stop"),
  resetButton: document.querySelector(".reset"),
  INITIAL_TIMELEFT: 25 * 60,
  titles: [
    "Concentrate!",
    "Focus your energy for 25 minutes!",
    "Do not let your mind distract you!",
    "Focus!"
  ]
};
