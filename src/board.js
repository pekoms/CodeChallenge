//Imports


//TODO --COMMENTS--
function createMars(lines) {
    const input = lines.trim().split('/n');

    let coordinates = input[0].trim().split(' ').map(number => parseInt(number, 10));;
    let mars = {
        up: coordinates[1],
        down: 0,
        left: 0,
        right: coordinates[0],


    }

    return mars;
}

//TODO createRobots()

//TODO export createMars + createRobots()