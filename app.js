document.addEventListener('DOMContentLoaded', () => {

    //creating card array
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

     
    const grid = document.querySelector(".grid");
    let cardsChosen = [];
    let cardsChosenId = [];
    const cardsWon = [];
    const resultDisplay = document.querySelector('#result');
    //creating board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    
    

    //checking for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        let firstCardId = cardsChosenId[0];
        let secondCardId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            alert('you found a match!');
            cards[firstCardId].setAttribute('src', 'images/white.png');
            cards[secondCardId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            alert("Sorry, try again");
            cards[firstCardId].setAttribute('src', 'images/blank.png');
            cards[secondCardId].setAttribute('src', 'images/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardsArray.length / 2) {
            alert("Hurray! You have matched all the cards!")
        }
    }



    // flipping the cards
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})