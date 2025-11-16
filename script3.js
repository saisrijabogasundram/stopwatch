let hours = 0;
let minutes = 0;
let seconds = 0;

let interval = null;
let running = false;

function updateTime() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").textContent = `${h}:${m}:${s}`;
}

document.getElementById("startBtn").onclick = function () {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateTime();
        }, 1000);
    } else {
        running = false;
        clearInterval(interval);
    }
};

document.getElementById("resetBtn").onclick = function () {
    running = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTime();
};
