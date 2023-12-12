import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
    const input = data.split('\n')
        .filter(value => value.length != 0)
        .map(value => value.split(" ")
        .map(strValue => parseInt(strValue)));
    
    let sum = 0;
    for (const values of input) {
        const result = recursivePredict(values);
        sum += result[result.length - 1];
    }
    let sumPart2 = 0;
    for (const values of input) {
        const result = recursivePredictPart2(values);
        sumPart2 += result[0];
        console.log("___________");
        console.log(result);
    }
    //const result = recursivePredictPart2([10, 13, 16, 21, 30, 45])
    console.log("---------------");
    //console.log(result);
    console.log(sum);
    console.log(sumPart2);
});

function recursivePredict(input) {
    //console.log(input);
    let newArr = [];
    for (let i = 0; i < input.length-1;) {
        newArr.push(input[i+1] - input[i])
        i += 1;
    }
    if (newArr.filter(value => value == 0).length == newArr.length) {
        return newArr; 
    } else {
        const list = recursivePredict(newArr);
        const update = input[input.length-1] + newArr[newArr.length-1];
        input.push(update);
        return input;
    }  
}

function recursivePredictPart2(input) {
    //console.log(input);
    let newArr = [];
    for (let i = 0; i < input.length-1;) {
        newArr.push(input[i+1] - input[i])
        i += 1;
    }
    if (newArr.filter(value => value == 0).length == newArr.length) {
        return newArr; 
    } else {
        const list = recursivePredictPart2(newArr);
        const update = input[0] - newArr[0];
        input.unshift(update);
        return input;
    }  
}
