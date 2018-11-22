export interface ISuit {
    id: string;
    name: string;
    icon: string;
}
export const SUITS: ISuit[] = [
    { id: 'S', name: 'Spades', icon: '&spadesuit;' },
    { id: 'H', name: 'Hearts', icon: '&heartsuit;' },
    { id: 'D', name: 'Diamonds', icon: '&diamondsuit;' },
    { id: 'C', name: 'Clubs', icon: '&clubsuit;' }
];

export interface IFace {
    id: string | number;
    name: string | number;
    value: number;
}
export const FACES: IFace[] = [
    { id: 'A', name: 'Ace', value: 1 },
    { id: 2, name: 2, value: 2 },
    { id: 3, name: 3, value: 3 },
    { id: 4, name: 4, value: 4 },
    { id: 5, name: 5, value: 5 },
    { id: 6, name: 6, value: 6 },
    { id: 7, name: 7, value: 7 },
    { id: 8, name: 8, value: 8 },
    { id: 9, name: 9, value: 9 },
    { id: 10, name: 10, value: 10 },
    { id: 'J', name: 'Jack', value: 10 },
    { id: 'Q', name: 'Queen', value: 10 },
    { id: 'K', name: 'King', value: 10 }
];

export interface ICard {
    face: IFace["id"];
    suit: ISuit["id"];
    points: number;
    index: number;
}
export const CARDS: ICard[] = SUITS.reduce((_, suit, suitIndex) => _.concat((FACES).map((face, faceIndex) =>
    ({ face: face.id, points: face.value, suit: suit.id, index: suitIndex * FACES.length + faceIndex })
)), []);
