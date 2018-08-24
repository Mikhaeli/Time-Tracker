const crud = ('./crud.js');

const fs = require('fs');

const argv = require('yargs').argv;
const date = require('date-and-time');
const chalk = require('chalk');

// Eaxample day
// {"day":"test","activites":{"programming":3,"reading":2}}

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
  var diary = readDiary();
  if (diary.filter(entry => entry.day === curDay).length) {
    console.log('Day already exists')
  } else if (curDay && activity && duration) {
    diary.push(new Log(curDay, activity, duration));
    writeDiary(diary);
  }
  // console.log(new Log(curDay, activity, duration));

}
if (command === 'read') {
  var diary = readDiary();
  for (var x of diary) {
    console.log(x);
  }
  //if day specifed, read day
  //if day not specified, console.log all days
}
if (command === 'update') {
  var diary = readDiary();
  if (diary.filter(entry => entry.day === curDay).length) {
    var dayIndex = objIndex(diary, 'day', curDay);
    diary[dayIndex].activites[activity] = diary[dayIndex].activites[activity]? diary[dayIndex].activites[activity] + duration : duration;
    writeDiary(diary);
  }
}
if (command === 'delete') {

}





console.log('');
console.log(chalk.blue(command));
console.log(chalk.blue(curDay));
console.log(chalk.blue(argv));
