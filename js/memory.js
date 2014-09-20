/* 
 * Eduvision
 * Cursus Javascript
 * 
 * Docent: Mark Nijenhuis
 * 
 * Dag 3
 * 19-09-2014
 */

"use strict";

var introtext = document.getElementById('introtxt');
var select_fieldsize = document.getElementById('select_fieldsize');
var field = document.getElementById('field');
var tries = document.getElementById('tries');
var success = document.getElementById('success');
var finished = document.getElementById('finished');
var timer_txt = document.getElementById('timer');
var card1;
var card2;
var step = 0;
var timesTried = 0;
var score = 0;
var cardsLeft = 0;
var timer;
var minutes;
var seconds;
    
select_fieldsize.addEventListener('change', onSelectFieldSize);
field.addEventListener('click', onClickCard);

function onClickCard(e) {
    e.target.setAttribute('class', 'uncovered');
        
    if (step === 0) {
        card1 = e.target;
        step++;
    } else if (step === 1) {
        card2 = e.target;
        evaluateMatch();
    }
}

function onSelectFieldSize(e) {
    resetGame();
    timer = setInterval(function() { myTimer(); },1000);
    
    populateGameField(e.target.value);
}

function populateGameField(fieldSize) {
    field.addEventListener('click', onClickCard);
    field.style.display = "block";
    finished.innerHTML = '';
    var myCardSet = new CardSet(fieldSize);
    cardsLeft = myCardSet.length;
    field.innerHTML = '';
    
    for (var i = 0; i < myCardSet.length; i++) {
        var newCard = document.createElement('div');
        var cover = document.createElement('div');
        var cardID = myCardSet[i].id;
        var cardName = myCardSet[i].name;
        var imgURL = 'url(img/' + myCardSet[i].picture + '.jpg)';
        cover.setAttribute('class', 'covered');
        newCard.setAttribute('id', cardID);
        newCard.setAttribute('name', cardName);
        newCard.style.backgroundImage = imgURL;
        newCard.appendChild(cover);
        field.appendChild(newCard);
    }
}

function myTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;	
    } else if (seconds < 10) {
        timer_txt.innerHTML = minutes + " : 0" + seconds;
    }
    else {
        timer_txt.innerHTML = minutes + " : " + seconds;
    }
}

function keepScore() {
    score++;
    document.getElementById('success').innerHTML = score;
    
    card1.parentElement.style.visibility = "hidden";
    card2.parentElement.style.visibility = "hidden";
    
    if (cardsLeft === 0) {
        clearInterval(timer);
        field.removeEventListener('click', onClickCard);
        field.style.display = "none";
        finished.innerHTML = '<div class="alert alert-success" role="alert">Gefeliciteerd!<br />Je hebt alle kaarten omgedraait in ' + timesTried + ' zetten. <br />Tijd: ' + minutes + ' minuten en ' + seconds + ' seconden.<div>';
        finished.innerHTML = '<div class="alert alert-success" role="alert">Gefeliciteerd!<br />Je hebt alle kaarten omgedraaid in ' + timesTried + ' zetten. <br />Tijd: ' + minutes + ' minuten en ' + seconds + ' seconden.<div>';
    } else {
        field.addEventListener('click', onClickCard);
    }
}

function resetGame() {
    clearInterval(timer);
    step = 0;
    timesTried = 0;
    score = 0;
    minutes = 0;
    seconds = 0;
    tries.innerHTML = timesTried;
    success.innerHTML = score;
}

function evaluateMatch() {
    field.removeEventListener('click', onClickCard);
    var nameCard1 = card1.parentElement.getAttribute('name');
    var nameCard2 = card2.parentElement.getAttribute('name');
    
    step = 0;
    timesTried++;
    tries.innerHTML = timesTried;
    
    if (nameCard1 === nameCard2) {
        cardsLeft -= 2;
        keepScore();
    } else {
        setTimeout( function () { nextMove(); }, 2000 );
    }
}

function nextMove() {
    card1.setAttribute('class', 'covered');
    card2.setAttribute('class', 'covered');
    
    field.addEventListener('click', onClickCard);
}