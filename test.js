const fs = require('fs');

var test_day = {day :'test', activites: {programming: 3, reading: 2}};

function readDiary() {
  let diary =  fs.readFileSync('./diary.json');
  return JSON.parse(diary);
}

function writeDiary(diary) {
  fs.writeFileSync('diary.json', JSON.stringify(diary));
}

var diary = readDiary();



diary.push(test_day);

writeDiary(diary);
