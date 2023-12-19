import fs from "fs";

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const input = data.split("\n");
    let sum = 0;
    for (let i = 0; i < input.length-1; i++) {
    //    console.log(input[i]);
        const nums = parser(input, i);
   //     console.log(nums);
        for (const num of nums) {
            sum += num;
        }
    } 
    const testIndex = input.length - 2;
    console.log(sum);
    console.log(input[testIndex]);
    console.log(parser(input, testIndex));
}
);

function parser(fullInput, fullIndex) {
    const input = fullInput[fullIndex]
    let numbers = [];
    let index = 0;
    while (index < input.length) {
        if (!isNaN(parseInt(input[index]))) {
            let num = input[index];
            let hasAdjacent = hasAdjacentSymbols(fullInput, index, fullIndex);
            while (!isNaN(parseInt(input[index + 1]))) {
                num += input[index + 1];
                if (hasAdjacentSymbols(fullInput, index, fullIndex)) {
                    hasAdjacent = true;
                }
                index++;
            }
            if (hasAdjacentSymbols(fullInput, index, fullIndex)) {
                hasAdjacent = true;
            }
            if (hasAdjacent) {
                numbers.push(parseInt(num));
            }
        }
        index++;
    }
    return numbers;
}

function hasAdjacentSymbols(input, x, y) {
    if (x != 0 && chechCell(input, x-1, y, false)) {
        return true;
    }
    if (x < input[0].length-1 && chechCell(input, x+1, y, false)) {
        return true;
    }
    if (y != 0 && chechCell(input, x, y-1, false)) {
        return true;
    }
    if (y < input.length-1 && chechCell(input, x, y+1, false)) {
        return true;
    }
    // check for diagonal
    if (y != 0 && x != 0 && chechCell(input, x-1, y-1, false)) {
        return true;
    }
    if (y < input.length-2 && x < input[0].length-1 && chechCell(input, x+1, y+1, false)) {
        return true;
    }
    if (x != 0 && y < input.length -2 && chechCell(input, x-1, y+1, false)) {
        return true;
    }
    if (y != 0 && x < input[0].length - 1 && chechCell(input, x+1, y-1, false)) {
        return true;
    }
}

// should be checkCell XD
function chechCell(input, x, y, ignoreMinus) {
    //console.log("check: ", x, y)
    //console.log("char: ", input[y][x])
    //console.log("----------------")
    if (isNaN(parseInt(input[y][x]))) {
        if (input[y][x] != '.') {
            if (input[y][x] == '-' && ignoreMinus) {
                return false;
            }
            return true;
        }
    }
    return false;
}
