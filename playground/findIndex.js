function objIndex(array, object, key) {
  return array.reduce(function(acc, cur, ind){
    if (cur[object] === key) {
      acc.push(ind);
    }
    return acc;
  }, []);
}


var diary = [{day: 'three'}, {day: 'two'}, {day: 'one'}];

console.log(objIndex(diary, 'day', 'one')[0]);
