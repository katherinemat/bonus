var sentence = prompt("Enter a sentence");

var capitalize = function(sentence) {
  return sentence.charAt(0).toUpperCase();
};

var lastCapitalize = function(sentence) {
  return sentence.slice(-1).toUpperCase();
};
console.log(capitalize(sentence));
console.log(lastCapitalize(sentence));

var combine = function(firstLetter, lastLetter) {
  return firstLetter + lastLetter;
};

console.log(combine(capitalize(sentence), lastCapitalize(sentence)));

var flip= function(lastLetter, firstLetter) {
  return lastLetter + firstLetter;
};

console.log(flip(lastCapitalize(sentence), capitalize(sentence)));


var third = function(combine, flip) {
  return combine + flip;
};

console.log(third(combine(capitalize(sentence), lastCapitalize(sentence)), flip(lastCapitalize(sentence), capitalize(sentence))));

var twoExtra= function(sentence, combine) {
  return sentence + combine;
};

console.log(twoExtra(sentence, combine(capitalize(sentence), lastCapitalize(sentence))));

var letterCount = function(sentence) {
  return sentence.charAt(sentence.length/2);
};

console.log(letterCount(sentence));

var weird = function(letterCount, twoExtra) {
  return letterCount + twoExtra;
};

console.log(letterCount(sentence), twoExtra(sentence, combine(capitalize(sentence), lastCapitalize(sentence))));
