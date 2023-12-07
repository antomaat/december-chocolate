import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data)=> {
    const time = data.split('\n')[0].split(':')[1].trim().match(/\S+/g).map(value => parseInt(value))
    const distance = data.split('\n')[1].split(':')[1].trim().match(/\S+/g).map(value => parseInt(value))
    let mult = -1
    for (let i= 0; i < time.length; i++) {
        const cache = calculate(time[i], distance[i]);
        if (mult == -1) {
            mult = cache;
        } else {
            mult *= cache;
        }
    }
    console.log(mult);
    
    //part2
    console.log("part 2");
    const result = calculatePairs(59707878, 430121812131276);
    console.log(result);
})


function calculate(time, distance) {
    let winCount = 0;
    for (let i = 0; i < distance; i++) {
        const speed = i;
        const remainder = time - i;
        if (remainder * speed > distance) {
            console.log("won with ms: ", i);
            winCount++;
        }
    }
    return winCount;
}

function calculatePairs(time, distance) {
    let left = 0;
    let right = time-1;
    let leftWin = false;
    let rightWin = false;
    while(left < right) {
        if (!leftWin) {
            leftWin = isWinCondition(left, time, distance);
            if (!leftWin) {
                left++;
            }
        }
        if (!rightWin) {
            rightWin = isWinCondition(left, time, distance);
            if (!rightWin) {
                right--;
            }
        }
        if (leftWin && rightWin) {
            break;
        }
    }
    console.log("right", right);
    console.log("left ", left);
    return right-left;
}

function isWinCondition(speed, time, dist) {
    const remainder = time - speed;
    if (remainder * speed > dist) {
        return true;
    }
    return false;
}
