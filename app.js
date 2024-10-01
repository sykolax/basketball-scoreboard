let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function incrementScore(team, score) {
    if (team === "home") {
        homeScore += score;
        homeScoreEl.innerText = homeScore;
    } else {
        guestScore += score;
        guestScoreEl.innerText = guestScore;
    }
}

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
});