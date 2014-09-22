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
var allPictures = ['8c1f958e-fc6e-4a49-b2e2-002ee08b1cf2','c1a4247c-cc12-43ec-9faa-df95994aa562','8ab4d0fe-ac0b-4e9a-a04d-0f961c23792b','e7a1571d-116a-4fc5-a82f-67728dff92c6','766abd1d-d699-4fc8-8a85-88ce24c6aa0c','de58333b-a72f-4a49-80a2-67f7d9c8565b','7ca0d094-19a8-440e-9cdb-5d62f2113f0e','d1d18fba-282e-4fe3-82e3-05618554f14e','94d1fdcf-59cc-45cd-a5f6-2326a85a5764','2379fd48-cb25-4965-b398-343b50b4ce79','45cf3223-a2fd-409f-a5bb-3639ba581621','c871101c-460c-461b-ae32-0bb9de67cbc2','89f6821c-3871-41ea-88ba-74130faefe16','33f786bf-f0ac-4939-a1d6-d5d7e9f4fb04','05a5b20d-55d2-4b60-a513-e08534b94fac','4b2f00ee-6b75-4301-a0c7-1fe8b50173f4','95b88440-316b-4cef-9b22-5975bda43596','b0479cfc-3d8b-4691-893e-27d2faf7164d','24f1c378-6c82-4779-b935-ce8f0d07198e','a7c9ebde-c916-4fbb-a535-0d33ca894b71'
];
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