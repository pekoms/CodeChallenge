//Imports


//TODO --COMMENTS--
function createMars(lines) {
    const input = lines.trim().split('\n');

    let coordinates = input[0].trim().split(' ').map(number => parseInt(number, 10));;
    let mars = {
        up: coordinates[1],
        down: 0,
        left: 0,
        right: coordinates[0],


    }

    return mars;
}

//TODO --COMMENTS--
function createRobots(lines) {
    const input = lines.trim().split('\n');

    const robots = []

    for (let i = 1; i < input.length; i += 2) {
        let robotCoord = input[i].trim().split(' ');
        let robotCommand = input[i + 1].trim().split(' ');

        robots.push({
            x: robotCoord[0],
            y: robotCoord[1],
            orientation: robotCoord[2],
            command: robotCommand[0],
            lost: false
        })


    }

    return robots



}

module.exports = {
    createMars,
    createRobots
}