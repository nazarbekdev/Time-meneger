document.addEventListener('DOMContentLoaded', function() {
    let hours = 0, minutes = 0, seconds = 0;
    let musicFile = null;

    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

    document.getElementById('set-timer').addEventListener('click', () => {
        let time = prompt("Vaqtni kiriting (HH:MM:SS)", "00:00:00");
        if (time) {
            let timeParts = time.split(':');
            hours = parseInt(timeParts[0]);
            minutes = parseInt(timeParts[1]);
            seconds = parseInt(timeParts[2]);

            hoursDisplay.textContent = String(hours).padStart(2, '0');
            minutesDisplay.textContent = String(minutes).padStart(2, '0');
            secondsDisplay.textContent = String(seconds).padStart(2, '0');
        }
    });

    document.getElementById('set-music').addEventListener('click', () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = 'audio/*';
        input.onchange = function(event) {
            musicFile = event.target.files[0];
        };
        input.click();
    });

    document.getElementById('start-timer').addEventListener('click', () => {
        if (musicFile) {
            localStorage.setItem('timer', JSON.stringify({ hours, minutes, seconds }));
            localStorage.setItem('musicFile', musicFile.name);
            window.location.href = 'timer.html';
        } else {
            alert("Iltimos, musiqa faylini tanlang!");
        }
    });
});
