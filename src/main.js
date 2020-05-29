//Imports
const board = require('./board');
const movement = require('./move');
const display = require('./display');


/**
 * Main program function
 * @param {String} lines 
 */
function execute(lines) {

    //Get Objects
    let mars = board.createMars(lines);
    let robots = board.createRobots(lines);

    //Move them
    movement.executeMovement(mars, robots);

    //Display robots

    display.showDisplay(robots)

}



module.exports = {
    execute
}