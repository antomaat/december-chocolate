import fs from "fs";

fs.readFile("test.txt", "utf8", (err, data) => {
    const input = data.split("\n").filter(value => value != "");
    const expandedInput = expandUniverse(input);
    expandedInput.forEach(value => console.log(value));
});

function expandUniverse(input) {
    let expandedUniverse = [];
    let expandColumns = [];
    for (let i = 0; i < input[0].length; i++) {
        let hasUniverse = false;
        for (let j = 0; j < input.length; j++) {
            if (input[j][i] == '#') {
                hasUniverse = true;
                break;
            }
        }
        if (!hasUniverse) {
            expandColumns.push(i);
        }
    }
    expandColumns = expandColumns.reverse();
    for (const row of input) { 
        let saveRow = row;
        for (const index of expandColumns) {
            saveRow = insert(saveRow, index, '.');
        }
        expandedUniverse.push(saveRow);
        if (row.indexOf('#') == -1) {
            expandedUniverse.push(saveRow);
        }
    }
    return expandedUniverse;
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
