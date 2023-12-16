import fs from "fs";

fs.readFile("real.txt", "utf8", (err, data) => {
    const input = data.split('\n').filter(value => value.length != 0)
    let x, y = 0;
    for (let i = 0; i < input.length; i++) {
        const index = input[i].indexOf('S')
        if (index != -1) {
            y = i;
            x = index;
        }
    }

    findPath(input, x, y);
});

function findPath(map, x, y) {
    const result = nonRecursivePath(map, x, y, 0, -1)
    console.log(result.length);
}


function nonRecursivePath(map, x, y, dirx, diry) {
    let currentTile
    let nextTile 
    let result = [];
    while (nextTile != 'S') {
        x += dirx;
        y += diry;
        currentTile = map[y][x]
        result.push(currentTile);
        if (currentTile == "-") {
            // -J7
            if (dirx == 1) {
                if (["-","7","J"].indexOf(nextTile) > -1) {
                    nextTile = map[y+diry][x + dirx]
                    continue
                }
            }
            if (dirx == -1) {
                // LF-
                if (["-", "L", "F"].indexOf(nextTile) > -1) {
                    nextTile = map[y+diry][x + dirx]
                    continue
                }
            }
        }
        if (currentTile == "|") {
            if (diry != 0) {
                // |
                // J
                // l
                if (diry == 1) {
                    if (["J", "L", "|"].indexOf(nextTile) > -1) {
                        nextTile = map[y+diry][x + dirx]
                        continue
                    }
                } else {
                    // F
                    // 7
                    // |
                    if (["|", "F", "7"].indexOf(nextTile) > -1) {
                        nextTile = map[y+diry][x + dirx]
                        continue
                    }
                }
            }
        }
        if (currentTile == "7") {
            if (dirx == 1) {
                dirx = 0;
                diry = 1;
                nextTile = map[y+diry][x + dirx]
                if (["|", "J", "L"].indexOf(nextTile) > -1) {
                    continue
                }
            }
            if (diry == -1) {
                dirx = -1;
                diry = 0;
                nextTile = map[y+diry][x + dirx]
                console.log("7 has next tile ", nextTile);
                if (["-", "L", "F"].indexOf(nextTile) > -1) {
                    continue
                }
            }
        }
        if (currentTile == "J") {
            if (dirx == 1) {
                dirx = 0;
                diry = -1;
                nextTile = map[y+diry][x + dirx]
                if (["|", "7", "F", "J"].indexOf(nextTile) > -1) {
                    continue
                }
            }
            if (diry == 1) {
                dirx = -1;
                diry = 0;
                nextTile = map[y+diry][x + dirx]
                if (["-", "L", "F"].indexOf(nextTile) > -1) {
                    continue
                }
            }
        }
        if (currentTile == "L") {
            if (dirx == -1) {
                dirx = 0;
                diry = -1;
                nextTile = map[y+diry][x + dirx]
                if (["|", "7", "F"].indexOf(nextTile) > -1) {
                    continue
                }
            }
            if (diry == 1) {
                dirx = 1;
                diry = 0;
                nextTile = map[y+diry][x + dirx]
                if (["-", "J", "7"].indexOf(nextTile) > -1) {
                    continue
                }
            }
        }
        if (currentTile == "F") {
            if (dirx == -1) {
                dirx = 0;
                diry = 1;
                nextTile = map[y+diry][x + dirx]
                if (["|", "L", "J"].indexOf(nextTile) > -1) {
                    continue;
                }
            }
            if (diry == -1) {
                dirx = 1;
                diry = 0;
                nextTile = map[y+diry][x + dirx]
                if (["-", "7", "J"].indexOf(nextTile) > -1) {
                    continue;
                }
            }
        }

    }
    return result;
}

