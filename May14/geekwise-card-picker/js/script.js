let pickCard = document.querySelector("#pick-card"), 
usersCards = document.querySelector("#users-cards"), 
lifebar = document.querySelector('.life-bar'),
lastDrew= document.querySelector('#last-drew');

let deckRank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
deckSuit = ["♡", "♤", "♧", "♢"];
const deck = [];
const usersDeck = [];

let BuildDeck = function(r, s)
{
    this.rank = r;
    this.suit = s;
    this.color = s == "♡" || s == "♢" ?  "red" : "black";
};

deckSuit.forEach(function(s){
    // console.log(s);
    deckRank.forEach(function(r){
        // console.log();
        deck.push(new BuildDeck(r, s));
    });
});

pickCard.addEventListener('click', function(evt){
    if(deck.length){
        let randomNum = Math.floor(Math.random() * deck.length);
        let randomCard = deck.splice(randomNum, 1)[0];
        usersDeck.push(randomCard);
        lastDrew.innerHTML = randomCard.rank + ' of ' + randomCard.suit;
        // console.log(deck[randomNum]);
        // console.log(deck, usersDeck);
        usersCards.innerHTML += card(randomCard);
    }
    checkCards();
});

function checkCards()
{
    deck.length ? pickCard.disabled = false : pickCard.disabled = true;
    lifebar.style.height = `${deck.length}px`;
    lifebar.style.backgroundColor = `hsl( ${deck.length *2} , 50%, 50%)`;
}

function card(cardObj)
{
    return `
        <li class="${cardObj.color} ui left floated compact center aligned segment card-in-hand">
                    <button class="ui large button">
                        <h2 style="color: ${cardObj.color}">${cardObj.rank} of ${cardObj.suit}</h2>
                        <span class="return">
                            RETURN
                            <i class="reply icon"></i>
                        </span>
                    </button>
        </li>
    `;
}

usersCards.addEventListener("click", function(evt)
{
    let thisCard = evt.target.parentElement;
    let cardNum = [].indexOf.call(usersCards.children, thisCard);
    let returnedCard = usersDeck[cardNum];
    deck.push(usersDeck.splice(cardNum, 1)[0]);
    usersCards.removeChild(thisCard);
    checkCards();
    // console.log(deck, usersDeck);

});