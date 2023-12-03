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
    console.log(calibrateCharsAndDigits("onebeighttwob"));
    //console.log(testInput(data));
    console.log("---------------");
    console.log(blabber("onea"));
});


function testInput(data) {
    const input_array = data.split("\n");
    let sum = 0;
    for (const line of input_array) {
        if (line.length > 0) {
            sum += calibrateDigits(line);
        }
    }
    return sum;
}

const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"]

function blabber(input) {
    let index = 0;
    let nums = [];
    let value = "";
    for (const num of numbers) {
        if (input[0] === num[index]) {
            nums.push(num)
            value += input[0];
        }
    }
    index++;
    console.log(nums);
    if (nums.length == 0) {
        return "";
    }
    for (const inp of input.substring(1)) {
        let nums_cache = [];
        for (const num of nums) {
            if (num.length-1 > index && inp === num[index]) {
                nums_cache.push(num)
                value += inp;
            }
        }
        console.log("nums ", nums);
        console.log("num cache", nums_cache)
        if (numbers.includes(value)) {
            return value;
        }
        if (nums_cache.length == 0) {
            console.log("empt")
            return "";
        } else {
            nums = nums_cache;
            index++;
        }
    }
    if (numbers.includes(input)) {
        return input;
    } else {
        return "";
    }
}

function digitFromString(input) {
    if (input == "one") {
        return 1;
    }
    if (input == "two") {
        return 2;
    }
    if (input == "three") {
        return 3;
    }
    if (input == "four") {
        return 4;
    }
    if (input == "five") {
        return 5;
    }
    if (input == "six") {
        return 6;
    }
    if (input == "seven") {
        return 7;
    }
    if (input == "eight") {
        return 8;
    }
    if (input == "nine") {
        return 9;
    }
    if (input == "zero") {
        return 0;
    }
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
            let num = blabber(line.substr(begin));
            console.log(num)
            if (num != "") {
                first = digitFromString(num);
            } 
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

