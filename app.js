const PERIODTIME = 25 * 60;
let homeScore = 0;
let guestScore = 0;
let timeLeft = PERIODTIME;

let period = 1;

let homeFoul = 0;
let guestFoul = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeFoulEl = document.getElementById("home-foul");
let guestFoulEl = document.getElementById("guest-foul");

let timerEl = document.getElementById("timer");
let periodEl = document.getElementById("period-num");

function incrementScore(team, score) {
    if (team === "home") {
        homeScore += score;
        homeScoreEl.innerText = homeScore;
    } else {
        guestScore += score;
        guestScoreEl.innerText = guestScore;
    }
}

function incrementFoul(team) {
    if (team === "home") {
        homeFoul += 1;
        homeFoulEl.innerText = homeFoul;
    } else {
        guestFoul += 1;
        guestFoulEl.innerText = guestFoul;
    }
}

function stopTimer(timerId) {
    clearInterval(timerId);
}

function resetTimer(timerId) {
    timeLeft = PERIODTIME;
    clearInterval(timerId);
}

function startTimer() {
    let timerId = setInterval(() => {
        timerEl.textContent = parseInt(timeLeft/60).toString().padStart(2, '0') + ":" + (timeLeft%60).toString().padStart(2, '0');
        timeLeft -= 1;
        if (timeLeft === -1) {
            nextPeriod(timerId);
        }
       
    }, 1000);
}

function nextPeriod(timerId) {
    if (period < 4) {
         period += 1;
         periodEl.textContent = period;
         resetTimer(timerId);
         startTimer();
    } else {
        stopTimer(timerId);
    }
}

function startNewGame() {
    timeLeft = PERIODTIME;
    homeScore = 0;
    homeFoul = 0;
    guestScore = 0;
    guestFoul = 0;
    period = 1;

    homeScoreEl.textContent = homeScore;
    homeFoulEl.textContent = homeFoul;
    guestScoreEl.textContent = guestScore;
    guestFoulEl.textContent = guestFoul;

    periodEl.textContent = period;
}

// Add event listers when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home-plus1").addEventListener("click", function() {
        incrementScore('home', 1);
    });
    document.getElementById("home-plus2").addEventListener("click", function() {
        incrementScore('home', 2);
    });
    document.getElementById("home-plus3").addEventListener("click", function() {
        incrementScore('home', 3);
    });

    document.getElementById("guest-plus1").addEventListener("click", function() {
        incrementScore('guest', 1);
    });
    document.getElementById("guest-plus2").addEventListener("click", function() {
        incrementScore('guest', 2);
    });
    document.getElementById("guest-plus3").addEventListener("click", function() {
        incrementScore('guest', 3);
    });

    document.getElementById("home-foul-plus1").addEventListener("click", function () {incrementFoul('home')});
    document.getElementById("guest-foul-plus1").addEventListener("click", function () {incrementFoul('guest')});

    startTimer();

    document.getElementById("new-game-btn").addEventListener("click", startNewGame);
});

