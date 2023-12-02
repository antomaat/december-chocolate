
const lib = require("./lib");
const input = "1abc2 \
pqr3stu8vwx \
a1b2c3d4e5f \
treb7uchet";


function testInput() {
    const input_array = input.split(" ");
    console.log(input_array[0]);
    calibrateDigits(input_array)
}

testInput()
