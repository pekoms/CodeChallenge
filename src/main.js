//Imports
const board = require('./board');

//TODO execute();

function execute(lines) {

    let mars = board.createMars(lines);
    let robots = board.createRobots(lines);

    console.log(mars);

    //TODO: Function for execute movemente

    //TODO: Function for display output
}



module.exports = {
    execute
}