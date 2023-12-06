import { warn } from "console";
import fs from "fs";


fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const clean = data.split('\n')
    let sum = 0;
    for (const card of clean) {
        if (card == '') break;
        const cards = card.split(':')[1];
        const winningNumbers = cards.split('|')[0].trim().match(/\S+/g).map(parseInput);
        const scratch= cards.split('|')[1].trim().match(/\S+/g).map(parseInput);
        const winnings = getWinningValues(scratch, winningNumbers);
        sum += calculateWinnings(winnings);
    }
    console.log("winning: ", sum);
})

function calculateWinnings(winnings) {
    let sum = 0;
    for (let i = 0; i < winnings.length; i++) {
        if (i == 0) {
            sum += 1;
        } else {
            sum *= 2;
        }
    }
    return sum;
}

function getWinningValues(scratch, winnings) {
    let match = [];
    for (const nr of winnings) {
        if (scratch.includes(nr)) {
            match.push(nr);
        }
    }
    return match;
}

function parseInput(input) {
    return parseInt(input.trim());
}
