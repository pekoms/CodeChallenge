/**
 * For each robot, show display of their pos
 * @param {Object} robots 
 */
function showDisplay(robots) {
    for (robot of robots) {

        if (robot.lost) {
            console.log(`${robot.x} ${robot.y} ${robot.orientation} LOST \n`)

        } else {
            console.log(`${robot.x} ${robot.y} ${robot.orientation} \n`)

        }
    }


}

module.exports = {
    showDisplay
}