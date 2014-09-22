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

var myDeck;
var allPictures = ['horse','mouse','dog','calf','cat','goose','pig','cow','puppy','duck','kitten','goat','sheep','rooster','hen','piglet','foal','lamb'];
var cardOffset = 120;

function Card() {
    this.id;
    this.name;
    this.picture;
    this.x;
    this.y;
}

function Shuffle(array) {
    var shuffledArray = [];
    do {
        var randomCard = Math.floor(Math.random() * array.length);
        shuffledArray.push(array[randomCard]);
        array.splice(randomCard, 1);
    } 
    while (array.length > 0);
    return shuffledArray;
}

function CardSet(fieldsize) {
    // Shuffle de kaarten
    var myPictures = allPictures.slice();
    myPictures = Shuffle(myPictures);
    var numberOfPictures = Math.floor(Math.pow(fieldsize, 2) / 2);
    
    // Zelfde resultaat als slice oplossing
    //myPictures.splice(numberOfPictures);
    myPictures = myPictures.slice(0, numberOfPictures);
    
    // Verdubbel het aantal kaarten
    var myDeck = myPictures.concat(myPictures);
    
    // Shuffle het Deck nogmaals
    myDeck = Shuffle(myDeck);
    
    /*
     * Loop is voor opmaak niet nodig
     * Voor gebruik met bijv. Canvas wel
     */
    var currentCard = 0;
    var gameFieldArray = [];

    for (var x = 0; x <= numberOfPictures; x++) {
        for (var y = 0; y <= numberOfPictures; y++) {
            if (currentCard < myDeck.length) {
                var newCard = new Card();
                var cardID = String('card' + currentCard);
                var cardName = myDeck[currentCard];
                newCard.id = cardID;
                newCard.name = cardName;
                newCard.picture = myDeck[currentCard];
                newCard.x = (x - 1) * cardOffset + 10;
                newCard.y = (y - 1) * cardOffset + 10;
                gameFieldArray.push(newCard);
            }
            currentCard++;
        }
    }
    return gameFieldArray;
}