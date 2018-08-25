const crud = require('./crud.js');

const fs = require('fs');

const argv = require('yargs').argv;
const date = require('date-and-time');
const chalk = require('chalk');

// Eaxample day
// {"day":"test","activites":{"programming":3,"reading":2}}
// Example call
// node index.js create --day="cur" --activity="reading" --duration="3"
var curDay = (argv.day === 'cur' || argv.day === 'current' || argv.day === undefined) ? date.format(new Date(), 'ddd MMM DD YYYY') : argv.day;
var activity = argv.activity;
var duration = argv.duration;

var command = argv._[0];

function readDiary() {
  let diary = fs.readFileSync('./diary.json');
  return JSON.parse(diary);
}

function writeDiary(diary) {
  fs.writeFileSync('diary.json', JSON.stringify(diary));
}

function objIndex(array, object, key) {
  return array.reduce(function(acc, cur, ind){
    if (cur[object] === key) {
      acc.push(ind);
    }
    return acc;
  }, []);
}

function Log(day, activity, duration) {
  this.day = day;
  this.activites = {};
  this.activites[activity] = duration;
}

if (command === 'create') {
  crud.create(curDay, activity, duration);
}

if (command === 'read') {
  crud.read();
}

if (command === 'update') {
  crud.update(curDay, activity, duration);
}

if (command === 'delete') {

}





// console.log('');
// console.log(chalk.blue(command));
// console.log(chalk.blue(curDay));
// console.log(chalk.blue(argv));
