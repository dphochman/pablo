// Sequ
// get cards, shuffle deck
// deal cards
// look at your front cards
// take a turn: pick a card from deck ... play it, replace one of your cards and put it on discard.
// ... play a card. 
// ... ... 7,8: you may look at one of your cards. 
// ... ... 9,10: you may look at another player's card. 
// ... ... J,Q: you may swap one of your cards with another player's card. Without looking at it.
// ... ... K-Spade, K-Club: you may look at one of your cards & one card of another player, and swap. 
// ... replace a card.
// ... ... A=1, 2-9: face value, 10,J,Q,K-Spade,K-Club: 10, K-Heart,K-Diamond: -1, Joker: 0.

// Get cards
import { FACES, SUITS, CARDS, ICard } from './constants';

const shuffle = (cards: ICard[]) => {
    const rands = cards.map(card => Math.random());
    const deck = cards.sort((a, b) => rands[a.index] - rands[b.index]);
    return deck;
}

let deck = shuffle(CARDS);
// console.log(deck, deck.length);

// Display your hand.
