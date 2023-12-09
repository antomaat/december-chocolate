import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
    const input = data.split('\n').filter(x => x.length > 0).map(value => value.split(' '));
    console.log(input);
    solvePart1(input);
    //console.log(matchType("23456"))
});

const cards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
// high card, one pair, two pair, three of a kind, full house, four of a kind, five of a kind
const hands = [[],[],[],[],[],[],[],];
function solvePart1(input) {
    for (const hand of input) {
        const type = matchType(hand[0]);
        hands[type].push(hand);
    }
    for (const resultHand of hands) {
    }
    console.log(hands);
}

function matchType(hand) {
    let handCount = new Array(13).fill(0);
    for (const item of hand.split("")) {
        const index = cards.findIndex(x => x == item)
        handCount[index] += 1;
    }
    if (isHighCard(hand)) {
        return 0;
    }
    if (isOnePair(handCount)) {
        return 1;
    }
    if (isTwoPair(handCount)) {
        return 2;
    }
    if (isThreeOfAKind(handCount)) {
        return 3;
    }
    if (isFullHouse(handCount)) {
        return 4;
    }
    if (isFourOfAKind(handCount)) {
        return 5;
    }
    if (isFiveOfAKind(handCount)) {
        return 6;
    }
    return -1;
}

function isFiveOfAKind(handCount) {
    let fiveCount = 0;
    for (const count of handCount) {
        if (count == 5) {
            fiveCount++;
        }
    }
    if (fiveCount == 1) {
        return true;
    }
    return false;
}

function isFourOfAKind(handCount) {
    let fourCount = 0;
    for (const count of handCount) {
        if (count == 4) {
            fourCount++;
        }
    }
    if (fourCount == 1) {
        return true;
    }
    return false;
}

function isFullHouse(handCount) {
    let pairCount = 0;
    let threeCount = 0;
    for (const count of handCount) {
        if (count == 3) {
            threeCount++;
        }
        if (count == 2) {
            pairCount++;
        }
    }
    if (pairCount == 1 && threeCount == 1) {
        return true;
    }
    return false;
}

function isThreeOfAKind(handCount) {
    let pairCount = 0;
    let threeCount = 0;
    for (const count of handCount) {
        if (count == 3) {
            threeCount++;
        }
        if (count == 2) {
            pairCount++;
        }
    }
    if (pairCount == 0 && threeCount == 1) {
        return true;
    }
    return false;
}

function isTwoPair(handCount) {
    let pairCount = 0;
    for (const count of handCount) {
        if (count ==2) {
            pairCount++;
        }
    }
    if (pairCount == 2) {
        return true;
    }
    return false;
}

function isOnePair(handCount) {
    let pairCount = 0;
    for (const count of handCount) {
        if (count ==2) {
            pairCount++;
        }
    }
    if (pairCount == 1) {
        return true;
    }
    return false;
}

function isHighCard(hand) {
    const splitHand = hand.split("");
    for (const card of hand) {
        if (splitHand.filter(one => one == card).length > 1) {
            return false;
        }
    }
    return true;
}
