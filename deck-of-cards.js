let count = 0;
let cards = [];
let deckId

const shuffleURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

async function shuffleCards(){
    document.getElementById('card-pile').innerHTML = '';
    let shuffle = await axios.get(shuffleURL);
        console.log(shuffle.data.deck_id)
        deckId = shuffle.data.deck_id
        count ++
};

async function shuffleGetCard(){
    document.getElementById('card-pile').innerHTML = '';
    let shuffle = await axios.get(shuffleURL);
        console.log(shuffle.data.deck_id)
        deckId = shuffle.data.deck_id
        count ++
    let card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let cardNum = card.data.cards[0].value
    let suit = card.data.cards[0].suit

    console.log(`${cardNum} of ${suit}`)
};

//Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.
async function getCardThenAnother(){
    document.getElementById('card-pile').innerHTML = '';
    let shuffle = await axios.get(shuffleURL);
        console.log(shuffle.data.deck_id)
        deckId = shuffle.data.deck_id
    let card1 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let card2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    let cardNum1 = card1.data.cards[0].value
    let cardNum2 = card2.data.cards[0].value
    let suit1 = card1.data.cards[0].suit
    let suit2 = card2.data.cards[0].suit
    console.log(`${cardNum1} of ${suit1}`)
    console.log(`${cardNum2} of ${suit2}`)
};

function drawCard(){
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(card => {
        let remaining = card.data.remaining
        let cardImg = card.data.cards[0].image
        let img =  document.createElement('img');
        let done = document.createElement('p');

        cards.push(remaining)
        console.log(cards)
        document.getElementById('card-pile').append(img)
        img.src = cardImg
        img.className = "card"
    });
};

function gameOver(){
        if (cards.length == 52){
            let done = document.createElement('p');
            console.log('All Cards Drawn')
            cards = [];
            count = [];
            document.getElementById('card-pile').innerHTML = '';
            document.getElementById('card-pile').append(done)
            done.innerHTML = 'All 52 Cards Have been Drawn. Please click Button Above to Resuffle Deck & Start Over'
    };
};

//This function shiffles first, then gets a random card from the same deck each time. It adds the card image each time the function is executed.
async function getCardAddImg(){
if(count == 0){
    document.getElementById('card-pile').innerHTML = '';
    let shuffle = await axios.get(shuffleURL);
        console.log(shuffle.data.deck_id)
        deckId = shuffle.data.deck_id
        count ++
 } else {
    let card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    
    let remaining = card.data.remaining
    let cardImg = card.data.cards[0].image
    let img =  document.createElement('img');

    cards.push(remaining)
    console.log(cards)
    document.getElementById('card-pile').append(img)
    img.src = cardImg
    img.className = "card"
    gameOver()
    };
};