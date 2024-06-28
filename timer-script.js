document.addEventListener('DOMContentLoaded', function() {
    let timerData = JSON.parse(localStorage.getItem('timer'));
    let musicFile = localStorage.getItem('musicFile');

    let hours = timerData.hours;
    let minutes = timerData.minutes;
    let seconds = timerData.seconds;

    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

    const stopAlarmButton = document.getElementById('stop-alarm');
    let audio = new Audio(musicFile);

    const updateDisplay = () => {
        hoursDisplay.textContent = String(hours).padStart(2, '0');
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    };

    const playMusic = () => {
        audio.play();
        stopAlarmButton.style.display = 'block';
    };

    const countdown = () => {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            clearInterval(timerInterval);
            playMusic();
            return;
        }
        updateDisplay();
    };

    updateDisplay();

    let timerInterval = setInterval(countdown, 1000);

    document.getElementById('reset-timer').addEventListener('click', () => {
        clearInterval(timerInterval);
        audio.pause();
        audio.currentTime = 0;
        stopAlarmButton.style.display = 'none';
        window.location.href = 'index.html';
    });

    stopAlarmButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        stopAlarmButton.style.display = 'none';
    });
});
