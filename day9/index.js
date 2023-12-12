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
        console.log("___________");
        console.log(result);
    }
    console.log(sum);
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
