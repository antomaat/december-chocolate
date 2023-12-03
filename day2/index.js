import fs from "fs";

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("data is heere");
    const input_array = data.split("\n");
    let sum = 0;
    for (let i = 0; i < input_array.length; i++) {
        if (input_array[i] == "") {
            break;
        }
        const cubes = parseLine(input_array[i]);
        if (isLinePossible(cubes)) {
            let game = input_array[i].split(":")[0].split(" ");
            sum += parseInt(game[1]);
        }
    }
    console.log(sum);
    sum = 0;
    for (let i = 0; i < input_array.length; i++) {
        if (input_array[i] == "") {
            break;
        }
        const cubes = parseLine2(input_array[i]);
        const multiply = cubes[0] * cubes[1] * cubes[2];
        sum += multiply;

    }
    console.log(sum);
    const line = "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red";
    console.log(line);
    const cubes = parseLine2(line);
    console.log(cubes);
});

function isLinePossible(cubes) {
    const redCubes = 12;
    const greenCubes = 13;
    const blueCubes = 14;
    return (cubes[0] <= redCubes && cubes[1] <= greenCubes && cubes[2] <= blueCubes)
}

function parseLine(line) {
    const results = line.split(":")[1].split(";");
    const cubes = [0, 0, 0] //r,g,b
    for (const game of results) {
        const items = game.split(",");
        for (let i = 0; i < items.length; i++) {
            const item_split = items[i].split(" ");
            if (item_split[2] == "red") {
                 const cube_count = parseInt(item_split[1])
                if (cube_count > cubes[0]) {
                    cubes[0] = cube_count;
                }
            }
            if (item_split[2] == "green") {
                const cube_count = parseInt(item_split[1])
                if (cube_count > cubes[1]) {
                    cubes[1] = cube_count;
                }
            }
            if (item_split[2] == "blue") {
                const cube_count = parseInt(item_split[1])
                if (cube_count > cubes[2]) {
                    cubes[2] = cube_count;
                }
            }
        }
    }
    return cubes;

}

function parseLine2(line) {
    const results = line.split(":")[1].split(";");
    const cubes = [0, 0, 0] //r,g,b
    for (const game of results) {
        const items = game.split(",");
        for (let i = 0; i < items.length; i++) {
            const item_split = items[i].split(" ");
            if (item_split[2] == "red") {
                 const cube_count = parseInt(item_split[1])
                if (cube_count > cubes[0]) {
                    cubes[0] = cube_count;
                }
            }
            if (item_split[2] == "green") {
                const cube_count = parseInt(item_split[1])
                if (cube_count > cubes[1]) {
                    cubes[1] = cube_count;
                }
            }
            if (item_split[2] == "blue") {
                const cube_count = parseInt(item_split[1])
                if (cube_count > cubes[2]) {
                    cubes[2] = cube_count;
                }
            }
        }
    }
    return cubes;

}
