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
    
select_fieldsize.addEventListener('change', onSelectFieldSize);

function onSelectFieldSize(e) {
    populateGameField(e.target.value);
}

function populateGameField(fieldSize) {
    var myCardSet = new CardSet(fieldSize);
    
    field.innerHTML = '';
    for (var i = 0; i < myCardSet.length; i++) {
        var newCard = document.createElement('div');
        //var cover = document.createElement('div');
        
        var cardName = myCardSet[i].name;
        var imgURL = 'url(img/' + myCardSet[i].picture + '.jpg)';
        newCard.setAttribute('id', cardName);
        newCard.style.backgroundImage = imgURL;
        
        //newCard.appendChild(cover);
        field.appendChild(newCard);
        
        console.log(newCard);
    }
}

function timer() {
    
}

function keepScore() {
    
}

function resetGame() {
    
}

function evaluateMatch() {
    
}