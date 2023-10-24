let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")
let homeScore = 0;
let guestScore = 0;

function reset() {
    guestScore = 0;
    guest.textContent = guestScore;
    homeScore = 0;
    home.textContent = homeScore;
    home.classList.remove("highlight");
    guest.classList.remove("highlight");
}

function plusOne() {
    homeScore += 1;
    home.textContent = homeScore;
    highlight() 
}

function plusTwo() {
    homeScore += 2;
    home.textContent = homeScore;
    highlight() 
}

function plusThree() {
    homeScore += 3;
    home.textContent = homeScore;
    highlight() 
}

function guestOne() {
    guestScore += 1;
    guest.textContent = guestScore;
    highlight() 
}

function guestTwo() {
    guestScore += 2;
    guest.textContent = guestScore;
    highlight() 
}

function guestThree() {
    guestScore += 3;
    guest.textContent = guestScore;
    highlight() 
}



function highlight() {
    if (homeScore > guestScore) {
        home.classList.add("highlight");
        guest.classList.remove("highlight");
    } else {
        guest.classList.add("highlight");
        home.classList.remove("highlight");       
    }
}