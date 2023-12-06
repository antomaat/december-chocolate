import { on } from "events";
import fs from "fs";

let seedToSoil = [];
let soilToFert = [];
let fertToWater = [];
let waterToLight = [];
let lightToTemp = [];
let tempToHumid = [];
let humidToLocation = [];

fs.readFile("input.txt", "utf8", (err, data)=> {
    const dataAsArray = data.split('\n');
    const seed = dataAsArray[0].split(':')[1].trim().split(' ').map(value => parseInt(value));

    convertInput(dataAsArray);

    console.log(seed);
    logMaps();

    let lowest = -1;
    console.log("calculate");
    for (const see of seed) {
        const location = getLocation(see);
        if (lowest == -1) {
            lowest = location;
        } else {
            if (location < lowest) {
                lowest = location;
            }
        }
    }
    console.log("location: ", lowest);
})

function getLocation(input) {
    const soil = convert(input, seedToSoil);
    const fert = convert(soil, soilToFert);
    const water = convert(fert, fertToWater);
    const light = convert(water, waterToLight);
    const temp = convert(light, lightToTemp);
    const humid = convert(temp, tempToHumid);
    return convert(humid, humidToLocation);
}

function convert(input, map) {
    for (let i = 0; i < map.length; i++) {
        const sourceRange = getSourceSize(map[i]);
        //console.log("source range: ", sourceRange);
        if (input >= sourceRange[0] && input <= sourceRange[1]) {
            const destRange = getDestinationSize(map[i]);
            //console.log("dest range: ", destRange);
            const location = input - sourceRange[0];
            return destRange[0] + location;
        }
    }
    return input;
}


function getDestinationSize(input) {
    return [input[0], input[0] + input[2]-1];
}

function getSourceSize(input) {
    return [input[1], input[1] + input[2]-1];
}


function logMaps() {
    console.log("seed to soil");
    console.log(seedToSoil);
    console.log("soil to fert");
    console.log(soilToFert);
    console.log("fert to water");
    console.log(fertToWater);
    console.log("water to light");
    console.log(waterToLight);
    console.log("light to temp");
    console.log(lightToTemp);
    console.log("temp to hum");
    console.log(tempToHumid);
    console.log("hum to location");
    console.log(humidToLocation);
}

function convertInput(dataAsArray) {
    let globalIndex = 0;
    // just move the index to the correct empty line
    while (dataAsArray[globalIndex] != '') {
        globalIndex++;
    }
    globalIndex++;
    globalIndex++;

    // seed-to-soil
    while (dataAsArray[globalIndex] != '') {
        seedToSoil.push(
            dataAsArray[globalIndex].trim().split(' ').map(value => parseInt(value))
        );
        globalIndex++;
    }
    globalIndex++;
    globalIndex++;

    // seed-to-soil
    while (dataAsArray[globalIndex] != '') {
        soilToFert.push(
            dataAsArray[globalIndex].trim().split(' ').map(value => parseInt(value))
        );
        globalIndex++;
    }

    globalIndex++;
    globalIndex++;

    // fert-to-water
    while (dataAsArray[globalIndex] != '') {
        fertToWater.push(
            dataAsArray[globalIndex].trim().split(' ').map(value => parseInt(value))
        );
        globalIndex++;
    }

    globalIndex++;
    globalIndex++;

    // fert-to-water
    while (dataAsArray[globalIndex] != '') {
        waterToLight.push(
            dataAsArray[globalIndex].trim().split(' ').map(value => parseInt(value))
        );
        globalIndex++;
    }

    globalIndex++;
    globalIndex++;

    // light-to-temp
    while (dataAsArray[globalIndex] != '') {
        lightToTemp.push(
            dataAsArray[globalIndex].trim().split(' ').map(value => parseInt(value))
        );
        globalIndex++;
    }

    globalIndex++;
    globalIndex++;

    // light-to-temp
    while (dataAsArray[globalIndex] != '') {
        tempToHumid.push(
            dataAsArray[globalIndex].trim().split(' ').map(value => parseInt(value))
        );
        globalIndex++;
    }

    globalIndex++;
    globalIndex++;

    // hum-to-loc
    while (dataAsArray[globalIndex] != '') {
        humidToLocation.push(
            dataAsArray[globalIndex].trim().split(' ').map(value => parseInt(value))
        );
        globalIndex++;
    }
}
