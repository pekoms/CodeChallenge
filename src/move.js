/**
 * For each robot, calculate his position in base the commands
 * @param {Object} mars 
 * @param {Object} robots 
 */
function executeMovement(mars, robots) {
    const scents = []
    for (robot of robots) {
        executeCommand(robot, mars, scents);

    }

    return robots;

}
/**
 * Get each command of commands
 * @param {object} robot 
 * @param {object} mars 
 * @param {Array} scents 
 */
function executeCommand(robot, mars, scents) {
    let command = robot.command;
    command = String(command).split('');

    for (let i = 0; i < command.length; i++) {
        let oldPoss = {
            x: robot.x,
            y: robot.y
        }
        commandOptions(robot, command[i]);
        checkNewPosition(mars, robot, scents, oldPoss);
        if (robot.lost == true) {
            break;
        }
    }
}
/**
 * Calls the robot next movement
 * @param {object} robot 
 * @param {Array} command 
 */
function commandOptions(robot, command) {

    switch (command) {
        case "L":
            leftCommand(robot)
            break;

        case "R":
            righCommand(robot)

            break;

        case "F":
            fowardCommand(robot)
            break;


    }

}
/**
 * Change robot orientation when turns left
 * @param {Object} robot 
 */
function leftCommand(robot) {

    switch (robot.orientation) {

        case "N":
            robot.orientation = "W"
            break;

        case "W":
            robot.orientation = "S"
            break;
        case "S":
            robot.orientation = "E"
            break;
        case "E":
            robot.orientation = "N"
            break;

    }

}
/**
 * Change robot orientation when turns right
 * @param {Object} robot 
 */
function righCommand(robot) {
    switch (robot.orientation) {

        case "N":
            robot.orientation = "E"
            break;

        case "E":
            robot.orientation = "S"
            break;
        case "S":
            robot.orientation = "W"
            break;
        case "W":
            robot.orientation = "N"
            break;

    }
}
/**
 * Change robot orientation when goes forward
 * @param {Object} robot 
 */
function fowardCommand(robot) {
    switch (robot.orientation) {

        case "N":
            robot.y = Number(robot.y) + 1
            break;

        case "E":
            robot.x = Number(robot.x) + 1

            break;
        case "S":
            robot.y = Number(robot.y) - 1

            break;
        case "W":
            robot.x = Number(robot.x) - 1

            break;

    }


}
/**
 * Restore robot poss before it gets lost
 * @param {Object} robot 
 */
function fixRobotPoss(robot) {
    switch (robot.orientation) {

        case "N":
            robot.y = Number(robot.y) - 1
            break;

        case "E":
            robot.x = Number(robot.x) - 1

            break;
        case "S":
            robot.y = Number(robot.y) + 1

            break;
        case "W":
            robot.x = Number(robot.x) + 1

            break;

    }


}
/**
 * Determinates if the robot is lost or spend scent
 * @param {object} mars 
 * @param {object} robot 
 * @param {object} scents 
 * @param {object} oldPoss 
 */
function checkNewPosition(mars, robot, scents, oldPoss) {

    if (robot.x > mars.right || robot.y < mars.down || robot.y > mars.up || robot.x < mars.left) {

        if (scents.length == 0) {
            robot.lost = true;
            fixRobotPoss(robot);
        }

        for (scent of scents) {
            if (scent.x == robot.x || scent.y == robot.y) {
                robot.lost = false;
                fixRobotPoss(robot);

            } else {
                robot.lost = true;
                fixRobotPoss(robot);



            }
        }

        scents.push({
            x: robot.x,
            y: robot.y
        })


    }



}
module.exports = {
    executeMovement
}