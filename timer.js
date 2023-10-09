let countdownDate = new Date('11/01/2023 00:00').getTime();
let daysE1 = document.getElementById('days');
let hoursE1 = document.getElementById('hours');
let minutesE1 = document.getElementById('minutes');
let secondsE1 = document.getElementById('seconds');
let interval;

function countdownTimer() {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        daysE1.innerText = formatNumber(Math.floor(distance / day));
        hoursE1.innerText = formatNumber(Math.floor((distance % day) / hour));
        minutesE1.innerText = formatNumber(Math.floor((distance % hour) / minute));
        secondsE1.innerText = formatNumber(Math.floor((distance % minute) / second));

        if (distance < 0) {
            document.getElementById('headline').innerText = 'Happy birthday to me:)';
            document.getElementById('countdown').style.display = 'none';
            clearInterval(interval);
        }
    }, 1000);
}

function formatNumber(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        countdownTimer();
        // Hide the start button only if the timer is not already running
        document.getElementById('startButton').style.display = 'none';
        isTimerRunning = true;
    }
} 

function stopTimer() {
    clearInterval(interval);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(interval);
    countdownDate = new Date('11/01/2023 12:00').getTime();
    countdownTimer();
    isTimerRunning = false;
}

function restartTimer() {
    stopTimer();
    resetTimer();
    startTimer();
}
