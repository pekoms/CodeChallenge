//File for input interface and main proccess execution

//Imports
const readline = require('readline');
const main = require('./main');

//Our Input
const lines = [];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.on('line', function(line) {

    line = line.trim().toUpperCase();
    if (line) {
        lines.push(line);
    } else {
        reader.close();
    }


});

//TODO Play();