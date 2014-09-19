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
var timer = document.getElementById('timer');
var card1;
var card2;
var step = 0;
var timesTried = 0;
var score = 0;
    
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
    populateGameField(e.target.value);
    resetGame();
}

function populateGameField(fieldSize) {
    var myCardSet = new CardSet(fieldSize);
    
    field.innerHTML = '';
    for (var i = 0; i < myCardSet.length; i++) {
        var newCard = document.createElement('div');
        
        var cover = document.createElement('div');
        cover.setAttribute('class', 'covered');
        
        var cardID = myCardSet[i].id;
        var cardName = myCardSet[i].name;
        
        var imgURL = 'url(img/' + myCardSet[i].picture + '.jpg)';
        
        newCard.setAttribute('id', cardID);
        newCard.setAttribute('name', cardName);
        
        newCard.style.backgroundImage = imgURL;
        
        newCard.appendChild(cover);
        field.appendChild(newCard);
    }
}

function timer() {
    
}

function keepScore() {
    field.addEventListener('click', onClickCard);
    score++;

    document.getElementById('succes').innerHTML = 'Score: ' + score;
}

function resetGame() {
    step = 0;
    timesTried = 0;
    score = 0;
    
    document.getElementById('tries').innerHTML = 'Aantal pogingen: ' + timesTried;
    document.getElementById('succes').innerHTML = 'Score: ' + score;
}

function evaluateMatch() {
    field.removeEventListener('click', onClickCard);
    
    var nameCard1 = card1.parentElement.getAttribute('name');
    var nameCard2 = card2.parentElement.getAttribute('name');
    
    step = 0;
    timesTried++;
    
    document.getElementById('tries').innerHTML = 'Aantal pogingen: ' + timesTried;
    
    if (nameCard1 === nameCard2) {
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