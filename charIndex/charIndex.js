function countLetters(phrase){

var letterCount = {};
for(let i = 0; i < phrase.length; i++){
  if(letterCount[phrase[i]]){
    letterCount[phrase[i]].push(i);
  }
  else{
    letterCount[phrase[i]] = [i];
  }
}
return letterCount;
}
console.log(countLetters("lighthouse in the house"));
