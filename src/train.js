const brain = require('brain.js').brain;
const fs = require("fs");
const path = require("path");

const trainingData = fs.readFileSync(path.join(__dirname, '../dataset/bad-bunny.txt')).toString().split("\n");

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
    iterations: 2500,
    log: (details) => console.log(details),
    errorThresh: 0.011,
});
console.log('Training result: ', result);

const trainingModel = lstm.toJSON();

fs.writeFile('model-bad-bunny.json', JSON.stringify(trainingModel), err => {
    if (err) {
        console.error(err)
    }
})

const run1 = lstm.run('Bad Bunny');
const run2 = lstm.run('Bad');
const run3 = lstm.run('cabron');


console.log('run 1:' + run1);
console.log('run 2:' + run2);
console.log('run 3:' + run3);
