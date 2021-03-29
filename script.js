(function () {
  const {
    title,
    minutesTimer,
    secondsTimer,
    startButton,
    stopButton,
    resetButton,
    INITIAL_TIMELEFT,
    titles
  } = appVariables;

  const formatTime = time => {
    return time.toString().padStart(2, "0");
  };

  const getMinutes = timeLeft => {
    const minutes = Math.floor(timeLeft / 60);
    return formatTime(minutes);
  };

  const getSeconds = timeLeft => {
    const seconds = timeLeft - minutes * 60;
    return formatTime(seconds);
  };

  const setTimeLeft = timeLeft => {
    minutes = getMinutes(timeLeft);
    seconds = getSeconds(timeLeft);
    minutesTimer.innerText = minutes;
    secondsTimer.innerText = seconds;
  };

  const reduceTimeLeft = previousTime => {
    timeLeft = previousTime - 1;
    return timeLeft;
  };

  const startTimer = () => {
    interval = setInterval(() => {
      if (timeLeft === 0) {
        return;
      }
      timeleft = reduceTimeLeft(timeLeft);
      setTimeLeft(timeLeft);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(interval);
    interval = null;
    timeLeft = INITIAL_TIMELEFT;
    setTimeLeft(INITIAL_TIMELEFT);
  };

  const changeTitle = () => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    return randomTitle;
  };

  let timeLeft = 25 * 60;
  let minutes = getMinutes(timeLeft);
  let seconds = getSeconds(timeLeft);
  let interval;

  // Event Listeners

  startButton.addEventListener("click", () => {
    if (interval) {
      return;
    }
    title.innerText = changeTitle();

    startTimer();
  });

  stopButton.addEventListener("click", () => {
    title.innerText = "Do not give up! You can do it!";
    clearInterval(interval);
    interval = null;
  });

  resetButton.addEventListener("click", () => {
    resetTimer();
  });

  setTimeLeft(INITIAL_TIMELEFT);
})();
