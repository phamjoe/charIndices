function countLetters(phrase){
var phraseNoSpace = phrase.split(' ').join('').split('');
var letterCount = {};
const counter = phraseNoSpace.reduce((count, letters) =>{
  if (!count[letters]){
    count[letters] = 1;
  }
  else{
    count[letters] = count[letters] + 1;
  }
  return count;
}, {});

return counter;
}
console.log(countLetters("lighthouse in the house"));