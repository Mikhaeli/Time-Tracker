const fs = require('fs');

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

exports.create = function(curDay, activity, duration) {
  var diary = readDiary();
  if (diary.filter(entry => entry.day === curDay).length) {
    console.log('Day already exists')
  } else if (curDay && activity && duration) {
    let entry = new Log(curDay, activity, duration);
    diary.push(entry);
    writeDiary(diary);
    console.log(entry);
  }
}

exports.read = function() {
  var diary = readDiary();
  for (var x of diary) {
    console.log(x);
  }
  //if day specifed, read day
  //if day not specified, console.log all days
}

exports.update = function(curDay, activity, duration) {
  var diary = readDiary();
  //If day already exists
  if (diary.filter(entry => entry.day === curDay).length) {
    //Find index of day
    var dayIndex = objIndex(diary, 'day', curDay);

    diary[dayIndex].activites[activity] = diary[dayIndex].activites[activity]? diary[dayIndex].activites[activity] + duration : duration;

    writeDiary(diary);
  }
}
