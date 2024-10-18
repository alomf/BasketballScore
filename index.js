let homeScore = 0;
let awayScore = 0;
let home = document.getElementById("home-score");
let away = document.getElementById("away-score");

function addHome(point){
    homeScore += point;
    home.innerText = homeScore;
    checkLeading();
}

function addAway(point){  
    awayScore += point;
    away.innerText = awayScore;
    checkLeading();
}

function reset() {  
    homeScore = 0;
    awayScore = 0;
    home.innerText = homeScore;
    away.innerText = awayScore;
    checkLeading();
}

function checkLeading(){
    if (homeScore > awayScore){
        home.style.color = "#10B981";
        away.style.color = "#F94F6D";
    } else if (awayScore > homeScore){
        home.style.color = "#F94F6D";
        away.style.color = "#10B981";
    } else {
        home.style.color = "#F94F6D";
        away.style.color = "#F94F6D";
    }
}