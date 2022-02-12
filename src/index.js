const brain = require('brain.js').brain;
const fs = require('fs');

//Load data
const model = JSON.parse(fs.readFileSync('model-bad-bunny.json','utf8'));

const lstm = new brain.recurrent.LSTM();

lstm.fromJSON(model);



const run1 = lstm.run('Baby');
const run2 = lstm.run('De tener');
const run3 = lstm.run('La cosa');


console.log('run 1:' + run1);
console.log('run 2:' + run2);
console.log('run 3:' + run3);