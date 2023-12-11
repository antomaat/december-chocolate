import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
    //console.log(data);
    const instructions = data.split("\n")[0];
    const maps = data.split("\n").filter(value => value.length > 0).slice(1);
    const map = createMap(maps);
    console.log(map);
    let next = "AAA";
    let index = 0;
    let steps = 0;
    while (next != "ZZZ") {
        console.log("=============")
        if (index >= instructions.length) {
            index = 0;
        }
        const direction = instructions[index];
        console.log(direction);
        const element = map[next];
        console.log("element is ", element);
        if (direction == "R") {
            next = element[1].trim();
        } else {
            next = element[0].trim();
        }
        steps++;
        console.log("next is ", next);
        index++;
    }

    console.log("found the exit in steps: ", steps);
})


function createMap(input) {
    let map = {}
    for (const line of input) {
        const key = line.split("=")[0].trim();
        const values = line.split("=")[1].trim().split(",").map(value => value.replace("(", "").replace(")", ""));
        map[key] = values;
    }
    return map;
}
