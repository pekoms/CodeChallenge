const assert = require('assert');
const sinon = require('sinon')
const main = require('../src/main');


const lines = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'


const program = require('../src/main.js');
describe('Samples', function() {

    main.execute(lines)



})