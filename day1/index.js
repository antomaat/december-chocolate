import fs from "fs";

const input = "1abc2 \
pqr3stu8vwx \
a1b2c3d4e5f \
treb7uchet";

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("data is heere");
    console.log(calibrateCharsAndDigits("7beighttwob"));
    console.log(testInput(data));
});


function testInput(data) {
    const input_array = data.split("\n");
    //console.log( calibrateCharsAndDigits(input_array[1]));
    let sum = 0;
    for (const line of input_array) {
        if (line.length > 0) {
            sum += calibrateDigits(line);
        }
    }
    return sum;
}

function calibrateCharsAndDigits(line) {
    let begin = 0;
    let end = line.length-1;
    let first = -1;
    let last = -1;
    for (let i = 0; i < line.length; i++) {
        if (!isNaN(parseInt(begin))) {
            first = parseInt(begin);
        } else {
        }
        if (!isNaN(parseInt(end))) {
             last = parseInt(end);
        } else {
        }
        
        if (first == -1) {
            begin++;
        }
        if (last == -1) {
            end--;
        }

        if (first > -1 && last > -1) {
            break;
        }
    }
}

function calibrateDigits(line) {
    let count = "";
    for (const char of line) {
        if (!isNaN(parseInt(char))) {
            count += char;
        } else {

        }
    }
    if (count.length == 1) {
        return parseInt(count+count);
    }
    let result = count[0];
    result += count[count.length - 1];
    return parseInt(result);
}

function isNumber(value) {
  return typeof value === 'number';
}

